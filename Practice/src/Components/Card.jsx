import React from 'react'



function Card({image, name, profession, description, isFriend,handleFriendsButton,index}) {


  return (
    <div className='h-[22rem] w-60 bg-zinc-400 rounded-md overflow-hidden text-white' >
        <div className='h-[57%] w-full bg-red-100'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <h1 className='font-bold px-2 mt-1 text-center'>{name}</h1>
        <h2 className='font-semibold px-2 mt-1 text-center'>{profession}</h2>
        <p className='font-bold px-2 text-xs mt-1 text-center'>{description}</p>
        <div className='flex w-full justify-center items-center'>
        <button onClick={() =>{handleFriendsButton(index)}} className={`px-3 py-1 ${!isFriend ? `bg-green-600` : `bg-red-600`} mt-2 rounded-md`}> {isFriend ? `Remove Friend` : `Add Friend`}</button>
        </div>
    </div>
  )
}

export default Card