import React, {useEffect, useState} from "react";

function Candidates() {
    const [candidates, setCandidates] = useState([{
        type: '',
        active:'',
        name: '',
        bio: '',
        policy1:'',
        policy1detail:'',
        policy2:'',
        policy2detail:'',
        policy3:'',
        policy3detail:'',
        policy4:'',
        policy4detail:'',
        policy5:'',
        policy5detail:'',
        policy6:'',
        policy6detail:'',
        policy7:'',
        policy7detail:'',
        policy8:'',
        policy8detail:'',
        policy9:'',
        policy9detail:'',
        policy10:'',
        policy10detail:''

    }])
    
    useEffect(() => {
        fetch("/candidates").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCandidates(jsonRes));
    })

    return <div className='container'>
        <h1>Candidate page</h1>
        {candidates.map(candidate =>
        <div>
            <h1>{candidate.name}</h1>
            <p>{candidate.bio}</p>
        </div>
            )}

    </div>
} 

export default Candidates;