import React, { useState , useEffect} from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {

  const[tasks, setTasks]=useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

   useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const[description, setDescription]=useState("");
  const[deadline,setDeadline]=useState("");
  // const[hour,setHour]=useState();
  // const[day,setDay]=useState();
  // const[min,setMin]=useState();
  // const[sec,setSec]=useState();

  

  return (
    <>
    <Header/>
    <Outlet context={{tasks,setTasks,description,setDescription,deadline,setDeadline}} />
    <Footer/>
    </>
  )
}

export default Layout
