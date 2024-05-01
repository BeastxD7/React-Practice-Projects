import React from 'react'

function Navbar() {
  return (
    <nav className=' w-full h-20 bg-sky-500 x-6 py-2 flex justify-between px-12 items-center text-white'>
        <h1 className='font-bold text-xl '>Brand Logo</h1>

        <ul className='flex items-center gap-6 max-sm:hidden'>
            <a href=""><h3 className='tetx-lg font-semibold'>Home</h3></a>
            <a href=""><h3 className='tetx-lg font-semibold'>About</h3></a>
            <a href=""><h3 className='tetx-lg font-semibold'>Services</h3></a>
            <a href=""><h3 className='tetx-lg font-semibold'>Contact Us</h3></a>
        </ul>
    </nav>
  )
}

export default Navbar