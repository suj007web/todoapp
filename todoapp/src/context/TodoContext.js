import { createContext } from "react";

export const TodoContext=createContext({
    todos: [
        {
    id:1,
    todo:"todomsg"}
],
addTask:(todo)=>{},
editTask:(id,todo)=>{},
deleteTask:(id)=>{}

})