import React,{useEffect,useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import {useLoaderData} from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Checkno from '../Checkno/Checkno';

function Home() {

    const [data,setData]= useState([]);

    const {tasks,setTasks,description,setDescription,deadline,setDeadline}= useOutletContext();

    

    // const[task, setTask]=useState([]);

 

    const countdown = ()=>{
      const now = new Date()
      const diff = (new Date(deadline))- now
      console.log(diff);
    }

    useEffect(()=>{
      fetch("https://api.realinspire.live/v1/quotes/random").then(
        response=>response.json()
      ).then(data=>{
        console.log(data[0]);
        setData(data[0]);
      })
    },[])

    const [time, setTime]=useState(new Date())

    useEffect(()=>{
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
  {/* Date & Time Card */}
  <div className="text-center p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-xl max-w-md mx-auto border border-gray-100 backdrop-blur-sm">
    <div className="flex items-center justify-center mb-3">
      <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-gray-600 text-lg font-semibold">
        Today's Date: {time.toLocaleDateString()}
      </p>
    </div>
    <div className="flex items-center justify-center">
      <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-gray-900 text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {time.toLocaleTimeString()}
      </p>
    </div>
  </div>

  {/* Quote Card */}
  <div className="max-w-2xl mx-auto bg-gradient-to-r from-white via-gray-50 to-white p-8 rounded-2xl shadow-xl mt-8 border border-gray-100 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400"></div>
    <div className="relative">
      <svg className="w-12 h-12 text-gray-300 mb-4 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
      </svg>
      <p className="italic text-gray-700 text-xl text-center leading-relaxed font-medium">
        "{data.content}"
      </p>
      <p className="text-gray-500 text-center mt-4 font-semibold">
        — {data.author}
      </p>
    </div>
  </div>

  {/* Pending Tasks Section */}
  <div className="max-w-5xl mx-auto mt-12">
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200">
      <div className="flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-amber-800">Your Pending Tasks</h2>
      </div>
      
      <div className="text-center bg-white rounded-xl p-6 shadow-md border border-amber-100">
        <div className="flex flex-wrap text-6xl font-bold text-amber-600 mb-2">
          <Checkno  tasks={tasks.slice(0,3)} />
        </div>
        <p className="text-amber-700 font-semibold text-lg">
          And many more Tasks waiting for you
        </p>
        <NavLink
        to="/tasks"
        
        >View All tasks</NavLink>
      </div>
    </div>
  </div>

  {/* Add Task Button */}
  <div className="text-center mt-10">
    <NavLink 
      to="/add"
      className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 border border-emerald-400"
    >
      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Add New Tasks Here ✨
      <div className="ml-3 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </NavLink>
  </div>
</div>
  )
}

export default Home

// export const quotes = async()=>{
//     const response = await fetch("https://api.realinspire.live/v1/quotes/random");
//     return response.json()
// }