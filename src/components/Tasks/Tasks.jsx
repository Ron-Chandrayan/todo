import React from 'react'
import { useEffect,useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Checkno from '../Checkno/Checkno'

function Tasks() {

  const{tasks,setTasks}= useOutletContext()
  const [filter,setFilter]=useState("");
  const[input,setInput]=useState("");

  // console.log(filter);
  // console.log(input);


  
   useEffect(() => {
                  const timer = setInterval(() => {
                    setTasks((prev) => [...prev]); // Triggers re-render
                  }, 1000);
        
                  return () => clearInterval(timer);
                }, []);

                
  return (
    <> 
      <div className='flex flex-wrap  '>
        <div className='m-auto'>
          <form 
              onSubmit={(e)=>{
                e.preventDefault()
              }}
              action=""
              className="flex items-center justify-center gap-4 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg border border-blue-100 max-w-2xl mx-auto"
            >
              <div className="relative flex-1">
                <input 
                  onChange={(e)=>{
                    setInput(e.target.value);
                  }}
                  value={input}
                  placeholder='Search tasks...'
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                  type="text" 
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              
              <select 
                onChange={(e)=>{
                  setFilter(e.target.value)
                }}
                className="px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-purple-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 min-w-[140px]"
                id="filter" 
                name="filter"
              >
                <option value="" disabled selected hidden className="bg-gray-800">Filter Tasks</option>
                <option value="description" className="bg-gray-800 text-white">📝 By Description</option>
                <option value="deadline incoming" className="bg-gray-800 text-white">⏰ Deadline Soon</option>
                <option value="deadline crossed" className="bg-gray-800 text-white">🚨 Overdue</option>
                <option value="Done" className="bg-gray-800 text-white">✅ Completed</option>
                <option value="UnDone" className="bg-gray-800 text-white">⭕ Pending</option>
              </select>
            </form>
        </div>
      </div>
      <div className='flex flex-wrap text-5xl font-bold text-amber-600 m-5' >
         <Checkno tasks={tasks} filter={filter} input={input} />
      </div>
    </>
  )
}

export default Tasks
