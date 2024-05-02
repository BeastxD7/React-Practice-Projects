import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Card from "./Components/Card.jsx";

const data =[
  {
    image: 'https://example.com/image1.jpg',
    name: 'John Doe',
    profession: 'Software Engineer',
    description: 'Experienced software engineer with a passion for building solutions.',
    isFriend: true
  },
  {
    image: 'https://example.com/image2.jpg',
    name: 'Jane Smith',
    profession: 'Graphic Designer',
    description: 'Creative graphic designer specializing in branding and digital media.',
    isFriend: false
  },
  {
    image: 'https://example.com/image3.jpg',
    name: 'Alice Johnson',
    profession: 'Marketing Manager',
    description: 'Marketing professional with a focus on social media and strategies.',
    isFriend: true
  },
  {
    image: 'https://example.com/image4.jpg',
    name: 'Bob Brown',
    profession: 'Web Developer',
    description: 'Web developer with expertise in front-end and back-end technologies.',
    isFriend: false
  },
  {
    image: 'https://example.com/image5.jpg',
    name: 'Emily Brown',
    profession: 'UI/UX Designer',
    description: 'Passionate about creating user-friendly interfaces and user experiences.',
    isFriend: false
  },
  {
    image: 'https://example.com/image6.jpg',
    name: 'David Wilson',
    profession: 'Data Scientist',
    description: 'Analyzing data to extract valuable insights and drive decisions.',
    isFriend: true
  },
  {
    image: 'https://example.com/image7.jpg',
    name: 'Sophia Miller',
    profession: 'Content Writer',
    description: 'Crafting engaging and informative content for various platforms .',
    isFriend: false
  },
  {
    image: 'https://example.com/image8.jpg',
    name: 'Michael Johnson',
    profession: 'Digital Marketer',
    description: 'Helping businesses grow through strategic digital marketing campaigns.',
    isFriend: true
  },
  {
    image: 'https://example.com/image9.jpg',
    name: 'Sarah Lee',
    profession: 'Product Manager',
    description: 'Driving product development and innovation to meet customer needs.',
    isFriend: false
  },
  {
    image: 'https://example.com/image10.jpg',
    name: 'Alexis Rodriguez',
    profession: 'Financial Analyst',
    description: 'Analyzing financial data and trends to support business decisions.',
    isFriend: true
  },

  {
    image: 'https://example.com/image1.jpg',
    name: 'John Doe',
    profession: 'Software Engineer',
    description: 'Experienced software engineer with a passion for building solutions.',
    isFriend: true
  },
  {
    image: 'https://example.com/image2.jpg',
    name: 'Jane Smith',
    profession: 'Graphic Designer',
    description: 'Creative graphic designer specializing in branding and digital media.',
    isFriend: false
  },
  {
    image: 'https://example.com/image3.jpg',
    name: 'Alice Johnson',
    profession: 'Marketing Manager',
    description: 'Marketing professional with a focus on social media and strategies.',
    isFriend: true
  },
  {
    image: 'https://example.com/image4.jpg',
    name: 'Bob Brown',
    profession: 'Web Developer',
    description: 'Web developer with expertise in front-end and back-end technologies.',
    isFriend: false
  },
  {
    image: 'https://example.com/image5.jpg',
    name: 'Emily Brown',
    profession: 'UI/UX Designer',
    description: 'Passionate about creating user-friendly interfaces and user experiences.',
    isFriend: false
  },
  {
    image: 'https://example.com/image6.jpg',
    name: 'David Wilson',
    profession: 'Data Scientist',
    description: 'Analyzing data to extract valuable insights and drive decisions.',
    isFriend: true
  },
  {
    image: 'https://example.com/image7.jpg',
    name: 'Sophia Miller',
    profession: 'Content Writer',
    description: 'Crafting engaging and informative content for various platforms .',
    isFriend: false
  },
  {
    image: 'https://example.com/image8.jpg',
    name: 'Michael Johnson',
    profession: 'Digital Marketer',
    description: 'Helping businesses grow through strategic digital marketing campaigns.',
    isFriend: true
  },
  {
    image: 'https://example.com/image9.jpg',
    name: 'Sarah Lee',
    profession: 'Product Manager',
    description: 'Driving product development and innovation to meet customer needs.',
    isFriend: false
  },
  {
    image: 'https://example.com/image10.jpg',
    name: 'Alexis Rodriguez',
    profession: 'Financial Analyst',
    description: 'Analyzing financial data and trends to support business decisions.',
    isFriend: true
  },




]


function App() {
  return (
    <>
      <div className="h-screen w-screen bg-zinc-800 overflow-x-hidden">
        <div>
          <Navbar />
        </div>

        <div className="flex flex-wrap justify-center p-10 gap-5">
          {data.map( (item, index) => <Card  key={index} image={item.image} name={item.name} profession={item.profession} description={item.description} isFriend={item.isFriend}/> )}
        </div>
      </div>
    </>
  );
}
 
export default App;