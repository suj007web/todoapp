import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TaskList=({todo})=>{
    const {editTask,deleteTask}=useContext(TodoContext);
    const [complete,setcomplete]=useState(false);
    const [edit,setedit]=useState(false);
    const [todomsg,settodo]=useState(todo.todo)
    const editTodo=()=>{
        editTask(todo.id,{todo:todomsg })
            setedit(false)
        
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={complete}
                onChange={setcomplete(!complete)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    edit ? "border-black/10 px-2" : "border-transparent"
                } ${complete ? "line-through" : ""}`}
                value={todomsg}
                onChange={(e) => settodo(e.target.value)}
                readOnly={!edit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (complete) return;

                    if (edit) {
                        editTodo();
                    } else setedit((prev) => !prev);
                }}
                disabled={complete}
            >
                {edit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTask(todo.id)}
            >
                ❌
            </button>
        </div>
    );

}