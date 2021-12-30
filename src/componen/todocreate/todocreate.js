import './todocreate.css';
import { useState } from 'react';


const Create=(props)=>{
    const [getinput,setinput]=useState('');

    const hadlesubmit=(event)=>{
        event.preventDefault()
        const newdata={
            id:Math.floor(Math.random() * 100)+1,
            title:getinput
        }
        props.oncreate(newdata);
        setinput('')
        // console.log(newdata)
     }

    

    const hendleinput=(event)=>{
      setinput(event.target.value);
      console.log(getinput)
    } 

    return (
        <div>
            <form className="form" onSubmit={hadlesubmit}>
                <input type="text" value={getinput} onChange={hendleinput} />
                <button type="submit">Add</button>

            </form>
        </div>
    )
}

export default Create;