import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {

  const data = [
    {
        name: 'Wireless Headphones',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 79.99,
        description: 'Enjoy music without the hassle of wires with these headphones.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Smartphone',
        image: 'https://images.unsplash.com/photo-1536846670933-ce6eef8dfe89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D',
        price: 159.99,
        description: 'Stay connected with the latest smartphone featuring a HD screen.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Fitness Tracker',
        image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 49.99,
        description: 'Track fitness goals with this sleek and lightweight tracker.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Portable Bluetooth Speaker',
        image: 'https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 29.99,
        description: 'Take music anywhere with this portable Bluetooth speaker.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Laptop Backpack',
        image: 'https://images.unsplash.com/photo-1667411425023-5cdf74d77ede?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 59.99,
        description: 'Protect laptop while on the go with this durable backpack.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Digital Camera',
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fHww',
        price: 299.99,
        description: 'Capture memories with stunning clarity using this camera.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Wireless Mouse',
        image: 'https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 19.99,
        description: 'Navigate computer with ease using this ergonomic wireless mouse.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Coffee Maker',
        image: 'https://images.unsplash.com/photo-1555118369-7b23b80f45f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMG1ha2VyfGVufDB8fDB8fHww',
        price: 39.99,
        description: 'Brew favorite coffee at home with this convenient coffee maker.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Smart Watch',
        image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
        price: 149.99,
        description: 'Stay organized and monitor health with this feature-packed smart watch.',
        stock: Math.random() < 0.5 ? true : false
    },
    {
        name: 'Electric Toothbrush',
        image: 'https://images.unsplash.com/photo-1612181819081-950d35f4d826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjB0b290aGJydXNofGVufDB8fDB8fHww',
        price: 49.99,
        description: 'Keep teeth clean and healthy with this advanced electric toothbrush.',
        stock: Math.random() < 0.5 ? true : false
    }
]



  

  return (


    <div className='bg-zinc-900 h-100% w-100% text-white '>
      
      <Navbar />
      <div className="max-sm:w-full w-fit card-container px-6 py-8 gap-6 flex flex-wrap shrink-0 justify-center items-center">
      {data.map((item, index)=> <Card  name={item.name} image={item.image} price={item.price} description={item.description} stock={item.stock} /> )}
      
      </div>
    </div>

  )
}

export default App