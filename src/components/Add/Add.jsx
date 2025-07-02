import React from 'react'
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Checkno from '../Checkno/Checkno';

function Add() {

  const{tasks,setTasks,description,setDescription,deadline,setDeadline}=useOutletContext();

  const submit = ()=>{

    const givendate = new Date(deadline);
    const now = new Date()

    if(givendate>=now){
       const newTask = {
        id: Date.now(),
      description: description,
      deadline : deadline,
      isDone: false
    }
    setTasks([...tasks,newTask]);
    }
    else{
      alert("please give a proper deadline")
    }


  }


                useEffect(() => {
          const timer = setInterval(() => {
            setTasks((prev) => [...prev]); // Triggers re-render
          }, 1000);

          return () => clearInterval(timer);
        }, []);

//     const dateStr = "2025-06-27T13:00";
// const dateObj = new Date(dateStr);

// // Example: formatted date and time
// const formattedDateTime = dateObj.toLocaleString();

  
  return (
    <>
    <form
  onSubmit={(e) => {
    e.preventDefault();
  }}
  className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl space-y-6 border border-gray-100"
>
  <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Add a New Task</h2>
  
  <div className="flex flex-col">
    <label htmlFor="description" className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
      Task Description
    </label>
    <input
      type="text"
      id="description"
      value={description}
      placeholder="Enter your task"
      className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gradient-to-r from-blue-50 to-purple-50"
      onChange={(e)=>{
        setDescription(e.target.value);
      }}
    />
  </div>
  
  <div className="flex flex-col">
    <label htmlFor="datetime" className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
      Deadline
    </label>
    <input
      type="datetime-local"
      id="datetime"
      value={deadline}
      className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-gradient-to-r from-purple-50 to-pink-50"
      onChange={(e)=>{
        setDeadline(e.target.value)
      }}
    />
  </div>
  
  <div className="text-center pt-2">
    <button
      type="submit"
      onClick={()=>{
        submit()
        
      }}
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      Add Task ✨
    </button>
    
  </div>
</form>

   <div className='flex flex-wrap'><Checkno tasks={tasks} /></div>
   {/* <div>{countdown()}</div> */}

   

    </>
  )
}

export default Add

