import React from "react";
import { useState,useContext } from "react";
import { TodoContext } from "../context/TodoContext";



export const TodoForm=()=>{
   
    const [todo,settodo]=useState("")
    const {addTask}=useContext(TodoContext)
   
    const add=(e)=>{
        e.preventDefault();
        
        if(!todo){
            return
        }else{
            
        addTask({id:Date.now(),todo:todo})}
        settodo("")



    }
    return( <form onSubmit={add} className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            value={todo}
            onChange={(e)=>settodo(e.target.value)}
            
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button type="submit"
         
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>)

}