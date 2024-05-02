import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Card from "./Components/Card.jsx";

const data =[
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    name: 'John Doe',
    profession: 'Software Engineer',
    description: 'Experienced software engineer with a passion for building solutions.',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Jane Smith',
    profession: 'Graphic Designer',
    description: 'Creative graphic designer specializing in branding and digital media.',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'Alice Johnson',
    profession: 'Marketing Manager',
    description: 'Marketing professional with a focus on social media and strategies.',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'Bob Brown',
    profession: 'Web Developer',
    description: 'Web developer with expertise in front-end and back-end technologies.',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'Emily Brown',
    profession: 'UI/UX Designer',
    description: 'Passionate about creating user-friendly interfaces and user experiences.',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'David Wilson',
    profession: 'Data Scientist',
    description: 'Analyzing data to extract valuable insights and drive decisions.',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1519895609939-d2a6491c1196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'Sophia Miller',
    profession: 'Content Writer',
    description: 'Crafting engaging and informative content for various platforms .',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'Michael Johnson',
    profession: 'Digital Marketer',
    description: 'Helping businesses grow through strategic digital marketing campaigns.',
    isFriend: false
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'Sarah Lee',
    profession: 'Product Manager',
    description: 'Driving product development and innovation to meet customer needs.',
    isFriend: false
  },
  {
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    name: 'Alexis Rodriguez',
    profession: 'Financial Analyst',
    description: 'Analyzing financial data and trends to support business decisions.',
    isFriend: false
  },

];

function App() {
  const [realdata, setRealdata] = useState(data)
  // console.log(realdata);

  const handleFriendsButton = (cardindex) =>{
    setRealdata((prev) => {
      return prev.map((item,index) => {
        if(index === cardindex){
          return {...item, isFriend: !item.isFriend}
        }
        return item
      })
    })
  }

  return (
    <>
      <div className="h-screen w-screen bg-zinc-800 overflow-x-hidden">
        <div>
          <Navbar />
        </div>

        <div className="flex flex-wrap justify-center p-10 gap-5">
          {realdata.map( (item, index) => <Card  key={index} handleFriendsButton={handleFriendsButton} index={index} image={item.image} name={item.name} profession={item.profession} description={item.description} isFriend={item.isFriend}  /> )}
        </div>
      </div>
    </>
  );
}
 
export default App;