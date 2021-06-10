import React, {useState} from "react";
import axios from "axios";

function CreateCandidate() {
    const [input, setInput] = useState({
        name: '',
        bio: ''
    })

function handleChange(event) {
    const {name, value} = event.target;


    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
    })
}

function handleClick(event) {
    event.preventDefault();
    const newCandidate = {
        name: input.name,
        bio: input.bio
    }
    axios.post('http://localhost:3001/create', newCandidate)

}
    return <div className='container'>
        <h1>Create Candidate page</h1>
        <form>
            <div className='form-group'>
                <input onChange={handleChange} name="name" value={input.name} autoComplete="off" className="form-control" placeholder="Candidate Name"></input>
            </div>

            <div className='form-group'>
            <textarea onChange={handleChange}  name="bio" value={input.bio}  autoComplete="off" className="form-control" placeholder="Candidate Bio"></textarea>
            </div>

            
            <button onClick={handleClick} className="btn btn-lg btn-info">ADD</button>
          

        </form>
    </div>
} 

export default CreateCandidate;