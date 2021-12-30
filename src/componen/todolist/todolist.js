import './todolist.css';

const todolist=(props)=>{
    console.log(props);
    return (
       
           <ul>
            {
               props.datatodo.map((props)=>{
                   return <li key={props.id}>{props.title}</li>
               }) 
            }
           </ul> 
        
    )
}

export default todolist
