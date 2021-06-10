import React, {useEffect, useState} from "react";

function Candidates() {
    const [candidates, setCandidates] = useState([{
        name: '',
        bio: ''
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