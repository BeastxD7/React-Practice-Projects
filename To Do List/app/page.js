"use client"
import React, { useState } from 'react'

const page = () => {
  const[title, settitle] = useState("")
  const[desc, setdesc] = useState("")
  const[mainTask, setmainTask]= useState([]);
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}]);
    setdesc("")
    settitle ("")
  }

const deleteHandler = (i)=>{
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setmainTask(copyTask)
}

  let renderTask = <h2 className='text-center font-bold'>No Task Available</h2>

  if(mainTask.length>0) {
  renderTask = mainTask.map((t,i)=>{
    
    return (
      <li key={i} className='flex items-center justify-between mb-5'>
      <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold pr-8'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6>
    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
    className='bg-red-500 font-bold text-white px-3 py-2 rounded-md' >Delete</button>
      </li>
    )
  })
}
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Beast's To Do List</h1>
   <form onSubmit={submitHandler}>
    <input className='border-black text-2xl border-4 m-8 px-4 py-2' type="text" placeholder='Enter Title Here' value={title} onChange={(e)=>{
      settitle(e.target.value);
    }} />
    <input className='border-black text-2xl border-4 m-8 px-4 py-2' type="text" placeholder='Enter Description Here' value={desc} onChange={(e)=>{
      setdesc(e.target.value)
    }}/>
    <button className='bg-black border-2 font-bold text-white px-3 py-3 rounded-md'>Add Task</button>
   </form>
   <hr/>
   <div className='p-8 bg-slate-300 rounded-lg m-3'>
    <ul>
      {renderTask}
    </ul>
   </div>
   </>
  )
}
export default page