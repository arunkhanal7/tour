import React from 'react'
import Navbar from './Navbar'
import Card1 from './Card1'


const App = () => {
  return (
    <>
    <div className='body'>
      <div className='heading'>
        <h1>TOUR DATES</h1>
        <p>Remember to book your Tickets!</p>
      </div>
     <Navbar/>
     
     



    </div>
    <div className='cards'>
    <Card1/> <Card1/> <Card1/>
    </div>

    
    </>
  )
}

export default App