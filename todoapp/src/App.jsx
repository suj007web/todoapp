import React from 'react';
import { useState } from 'react'
import { TodoContext } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TaskList } from './components/TaskList';



import './App.css'
import { useEffect } from 'react';


function App() {
  const [todos,setTodos]=useState([])

  const addTask = (todo) =>{
    
    setTodos((prev)=>
      

      [{...todo},...prev])
    
    }

  const editTask=(id,todo)=>{
    setTodos((prev)=>
      prev.map((singletodo)=>
       (singletodo.id===id? todo: singletodo)))  

  }
  const deleteTask=(id)=>{
    setTodos((prev)=>
      prev.filter((singletodo)=>
        singletodo.id!==id

      )
    )

  }
  useEffect(()=> {
    const todos=JSON.parse(localStorage.getItem("todos"))
      if(todos && todos.length>0){
      setTodos(todos)}
    
  },[])
 useEffect(()=>{
    
    localStorage.setItem("todos",JSON.stringify(todos))}

  ,[todos])
 return (
    <TodoContext.Provider value={{todos,addTask, editTask ,deleteTask}}>
    <div className="bg-[#203656] w-full h-full ">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          
            <TodoForm/> 
        </div>
        <div className="flex flex-wrap gap-y-3">
          <ul>
            {todos.map((todo)=>(
              <li key={todo.id}><TaskList todo={todo}/></li>
            ))}
          </ul>

         
    
          
          
          
           
        
        </div>
    </div>
</div></TodoContext.Provider>
  )}

export default App
