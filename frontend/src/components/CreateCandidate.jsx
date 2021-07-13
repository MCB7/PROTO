import React, {useState} from "react";
import axios from "axios";

function CreateCandidate() {
    const [input, setInput] = useState({
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

        
    })

function handleChange(event) {
    const {type, 
          active, 
          name, 
          bio, 
          policy1, 
          policy1detail, 
          policy2, 
          policy2detail, 
          policy3, 
          policy3detail, 
          policy4, 
          policy4detail,
          policy5,
          policy5detail,
          policy6,
          policy6detail,
          policy7,
          policy7detail,
          policy8,
          policy8detail,
          policy9,
          policy9detail,
          policy10,
          policy10detail,
           value} = event.target;


    setInput(prevInput => {
        return {
            ...prevInput,
            [type]: value,
            [active]:value,
            [name]: value,
            [bio]: value,
            [policy1]: value,
            [policy1detail]: value,
            [policy2]: value,
            [policy2detail]: value,
            [policy3]: value,
            [policy3detail]: value,
            [policy4]: value,
            [policy4detail]: value,
            [policy5]: value,
            [policy5detail]: value,
            [policy6]: value,
            [policy6detail]: value,
            [policy7]: value,
            [policy7detail]: value,
            [policy8]: value,
            [policy8detail]: value,
            [policy9]: value,
            [policy9detail]: value,
            [policy10]: value,
            [policy10detail]: value
        }
    })
}


function handleClick(event) {
    event.preventDefault();

    const newCandidate = {
        type: input.type,
        active: input.active,
        name: input.name,
        bio: input.bio,
        policy1: input.policy1,
        policy1detail: input.policy1detail,
        policy2: input.policy1,
        policy2detail: input.policy1detail,
        policy3: input.policy1,
        policy3detail: input.policy1detail,
        policy4: input.policy1,
        policy4detail: input.policy1detail,
        policy5: input.policy1,
        policy5detail: input.policy1detail,
        policy6: input.policy1,
        policy6detail: input.policy1detail,
        policy7: input.policy1,
        policy7detail: input.policy1detail,
        policy8: input.policy1,
        policy8detail: input.policy1detail,
        policy9: input.policy1,
        policy9detail: input.policy1detail,
        policy10: input.policy1,
        policy10detail: input.policy1detail

    }
    console.log(newCandidate,'after handle click')
    axios.post('http://localhost:3001/create', newCandidate)

}
    return <div className='container'>
        <h1>Create Candidate page</h1>
        <form>

            <div className='form-group'>
                <input onChange={handleChange} name="type" value={input.type} autoComplete="off" className="form-control" placeholder="Candidate Type"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="active" value={input.active} autoComplete="off" className="form-control" placeholder="Active?"></input>
            </div>


            <div className='form-group'>
                <input onChange={handleChange} name="name" value={input.name} autoComplete="off" className="form-control" placeholder="Candidate Name"></input>
            </div>

            <div className='form-group'>
            <textarea onChange={handleChange}  name="bio" value={input.bio}  autoComplete="off" className="form-control" placeholder="Candidate Bio"></textarea>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy1" value={input.policy1} autoComplete="off" className="form-control" placeholder="Policy1 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy1detail" value={input.policy1detail} autoComplete="off" className="form-control" placeholder="Policy1 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy2" value={input.policy2} autoComplete="off" className="form-control" placeholder="Policy2 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy2detail" value={input.policy2detail} autoComplete="off" className="form-control" placeholder="Policy2 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy3" value={input.policy3} autoComplete="off" className="form-control" placeholder="Policy3 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy3detail" value={input.policy3detail} autoComplete="off" className="form-control" placeholder="Policy3 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy4" value={input.policy4} autoComplete="off" className="form-control" placeholder="Policy4 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy4detail" value={input.policy4detail} autoComplete="off" className="form-control" placeholder="Policy4 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy5" value={input.policy5} autoComplete="off" className="form-control" placeholder="Policy5 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy5detail" value={input.policy5detail} autoComplete="off" className="form-control" placeholder="Policy5 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy6" value={input.policy6} autoComplete="off" className="form-control" placeholder="Policy6 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy6detail" value={input.policy6detail} autoComplete="off" className="form-control" placeholder="Policy6 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy7" value={input.policy7} autoComplete="off" className="form-control" placeholder="Policy7 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy7detail" value={input.policy7detail} autoComplete="off" className="form-control" placeholder="Policy7 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy8" value={input.policy8} autoComplete="off" className="form-control" placeholder="Policy8 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy8detail" value={input.policy8detail} autoComplete="off" className="form-control" placeholder="Policy8 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy9" value={input.policy9} autoComplete="off" className="form-control" placeholder="Policy9 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy9detail" value={input.policy9detail} autoComplete="off" className="form-control" placeholder="Policy9 Detail"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="policy10" value={input.policy10} autoComplete="off" className="form-control" placeholder="Policy10 Title"></input>
            </div>

            
            <div className='form-group'>
                <input onChange={handleChange} name="policy10detail" value={input.policy10detail} autoComplete="off" className="form-control" placeholder="Policy10 Detail"></input>
            </div>

            
            <button onClick={handleClick} className="btn btn-lg btn-info">ADD</button>
          

        </form>
    </div>
} 

export default CreateCandidate;