import React from 'react'
import Navbar from './Navbar'
import Card1 from './Card1'
import img2 from "../src/paris.jpg"
import img3 from "../src/san.jpg"


const App = () => {
  let link1 = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
  return (
    <>
    <div className='body'>
      <div className='heading'>
        <h1>TOUR DATES</h1>
        <p>Remember to book your Tickets!</p>
      </div>
     <Navbar month="october" isSold={true}/>
     <Navbar month="november" isSold={true}/>
     <Navbar month="december" isSold={false}/>
     
     



    </div>
    <div className='cards'>
    <Card1 name="New York" date="Fri 27 Nov 2016" detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit." imageSrc={link1} />
     <Card1 name="Paris" date="Sat 28 Nov 2016" detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit" imageSrc={img2} />
      <Card1 name="San Fransisco" date="Sun 29 Nov 2016" detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit" imageSrc={img3} />
    </div>

    
    </>
  )
}

export default App