

import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

function Checkno({ tasks ,filter, input }) {

     


  if (!tasks || tasks.length === 0) {
    return <p className="text-center text-gray-500 m-auto">No tasks pending</p>;
  } 
  else if(filter){

    if(filter==="description"){

     const results=(tasks.map((task,index)=>{
        if((task.description).includes(input))
        {
           return(<Card key={task.id} task={task} index={index} />)
          
        }

      }))

      const validateResults=results.filter(Boolean);
      if(validateResults.length===0){
        return(<><p className=" text-2xl m-auto" >  No results found</p></>)
      }
      else{
        return validateResults;
      }

    }else if(filter==="deadline incoming"){
     
      const results = (tasks.sort((a,b)=>(new Date(a.deadline) - new Date(b.deadline))).map((task,index)=>{  //array.map() return a new array with each element changeed according to the function it does
        const deadline = new Date(task.deadline);  
        console.log(deadline);
        const now = new Date();
        if((task.description).includes(input) && (task.isDone===false) && (deadline > now))
           { 
              return(<Card key={task.id} task = {task} index = {index} />)
            }
            else{
              return null
            }

      }))

      const validateResults = results.filter(Boolean) //removes the null cards in validateresults...(task which didnt satisfy the condition)
      if(validateResults.length===0){
        return(<><p className=" text-2xl m-auto" >No results found</p></>)
      }
      else{
        return validateResults;
      }

    }else if(filter==="deadline crossed"){

      const results=(tasks.sort((a,b)=>(new Date(b.deadline)-new Date(a.deadline) )).map((task,index)=>{
        const deadline = new Date(task.deadline);
        console.log(deadline);
        const now = new Date();
        if((task.description).includes(input) &&((task.isDone===false)))
           { if(deadline < now){
              return(<Card key={task.id} task = {task} index = {index} />)
            }}

      }))

      const validateResults = results.filter(Boolean) //removes the null cards in validateresults...(task which didnt satisfy the condition)
      if(validateResults.length===0){
        return(<><p className=" text-2xl m-auto" >No results found</p></>)
      }
      else{
        return validateResults;
      }

    }else if(filter==="Done"){

      const results=(tasks.map((task,index)=>{
        if((task.description).includes(input)){
          if((task.isDone)===true){
            return(<Card key={task.id} task={task} index={index} />)
          }
        }
      }))

      const validateResults = results.filter(Boolean) //removes the null cards in validateresults...(task which didnt satisfy the condition)
      if(validateResults.length===0){
        return(<><p className=" text-2xl m-auto" >No results found</p></>)
      }
      else{
        return validateResults;
      }


    }else if(filter==="UnDone"){
      const results=(tasks.map((task,index)=>{
        if((task.description).includes(input)){
          if((task.isDone)===false){
            return(<Card key={task.id} task={task} index={index} />)
          }
        }
      }))

      const validateResults = results.filter(Boolean) //removes the null cards in validateresults...(task which didnt satisfy the condition)
      if(validateResults.length===0){
        return(<><p className="text-2xl m-auto" >No results found</p></>)
      }
      else{
        return validateResults;
      }
    }
    
  }
  else{
  return (
    tasks.map((task,index)=>(
      <Card key={task.id} task={task} index={index} />
    ))
  );}
}




export default Checkno
