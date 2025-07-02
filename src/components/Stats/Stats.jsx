import React from 'react'
import {useState,useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'

function Stats() {

  const {tasks,setTask}=useOutletContext();
  const[completed,setCompleted]=useState(0);
  const[donebefdeadline, setdonebefdeadline]=useState(0);
  const[notdonebefdeadline,setNotdonebefdeadline]=useState(0);


  

 useEffect(() => {
    let count = 0;
    let count2=0;
    let count3=0;
    
    tasks.forEach(task => {
      const deadline = new Date(task.deadline);
      const now = new Date();
      if (task.isDone === true) {
        count += 1;
        if(deadline>now){
          count2+=1;
        }
        else if(now>deadline){
          count3+=1;
        }
      }
    });
    setCompleted(count);
    setdonebefdeadline(count2);
    setNotdonebefdeadline(count3);
  }, [tasks]); 

  return (
    <>
    {tasks.length!==0?(<div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
  <div className="mb-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Task Summary</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Tasks Completed */}
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Tasks Completed</h3>
          <p className="text-3xl font-bold text-green-600">{completed}/{tasks.length}</p>
        </div>
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
    </div>

    {/* Tasks Pending */}
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Tasks Pending</h3>
          <p className="text-3xl font-bold text-orange-600">{(tasks.length)-(completed)}/{tasks.length}</p>
        </div>
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
      </div>
    </div>

    {/* Completion Percentage */}
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Completion Rate</h3>
          <p className="text-3xl font-bold text-blue-600">{((completed)/(tasks.length)*100).toFixed(2)}%</p>
        </div>
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
      </div>
    </div>

    {/* Tasks Completed Before Deadline */}
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Before Deadline</h3>
          <p className="text-3xl font-bold text-emerald-600">{donebefdeadline}/{tasks.length}</p>
        </div>
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      </div>
    </div>

    {/* Tasks Completed After Deadline */}
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">After Deadline</h3>
          <p className="text-3xl font-bold text-red-600">{notdonebefdeadline}/{tasks.length}</p>
        </div>
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  
  {/* Progress Bar */}
  <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700">Overall Progress</span>
      <span className="text-sm font-medium text-gray-700">{((completed)/(tasks.length)*100).toFixed(2)}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out" 
        style={{width: `${((completed)/(tasks.length)*100).toFixed(2)}%`}}
      ></div>
    </div>
  </div>
    </div>):(<div className='w-full text-center text-4xl font-bold text-blue-700'>Nothing to show, as you have no task😊</div>)}
   
    
    </>
  )
}

export default Stats
