"use client"
import React, { useState } from 'react'

const page = () => {
  const[title, settitle] = useState("")
  const[desc, setdesc] = useState("")
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(title);
    console.log(desc);
    setdesc("")
    settitle ("")
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
   </>
  )
}
export default page