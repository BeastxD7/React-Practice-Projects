import React from 'react'

function Card({name, image, price, description,stock}) {

   
        console.log(stock)


  return (
    <div  className='w-56 h-[18.5rem] bg-zinc-500 overflow-hidden rounded-md relative'>
        <div className="image h-40 w-56 bg-sky-500">
            <img className='object-cover w-full h-full' src={image} alt="" />
        </div>
        <h1 className='font-bold px-2 text-center mt-1'>{name}</h1>
        <h3 className='font-medium px-2 mt- text-center'>Rs.{price}</h3>
        <p className='font-semibold text-xs px-2 text-center mt-1'> {description}</p>
        <button className={` px-3 py-[0.25rem] rounded mt-3 absolute left-[25%] ${stock ? 'bg-sky-400': 'bg-red-500'}`}>
            <h1 className='font-bold text-sm'>{stock ? `In Stock` : `Out of Stock`}</h1>
        </button>
    </div>
  )
}

export default Card