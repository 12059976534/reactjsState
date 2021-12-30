import React from "react";
import { useState } from "react";
import Todolist from "../componen/todolist/todolist"
import Todocreate from "../componen/todocreate/todocreate"
import './todo.css';



const Todo=()=>{
        
        //tampung data
        const [getData,setData]=useState([
            {"id":1,"title":"kucing"},
            {"id":2,"title":"anjing"},
            {"id":3,"title":"ayam"},
            {"id":4,"title":"kelinci"}
        ])
        
        //fuction tambah data
        const createdata=(newdata)=>{
            setData(getData.concat(newdata)) //tambah
            // console.log(`++${data}`)
        }
        
        return (
            <div className="Todo">
                <h1>Todo List</h1>
                <Todocreate oncreate={createdata} />
                <Todolist datatodo={getData} />
            </div>
        )
}

export default Todo;