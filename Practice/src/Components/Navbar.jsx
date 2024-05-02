import React from 'react'
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <div className='w-full h-20 bg-sky-500 flex justify-between px-6 py-1 items-center text-white'>
        <h1 className='font-bold text-xl'>BeastHub ❤️</h1>

        <ul className='max-sm:hidden flex gap-6 text-lg font-semibold '>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>

        <div className='sm:hidden'>
        <h1 className='font-bold text-2xl'> <IoMdMenu /> </h1>
        </div>
    </div>
    
  )
}

export default Navbar