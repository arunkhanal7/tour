import React from 'react'

const Card1 = ({name,date,detail,imageSrc}) => {
  return (
    <>
    <div className='card'>
        <img src= {imageSrc} alt="newyork" />
        <p>{name}</p>
        <p>{date}</p>
        <p>{detail}</p>
        <button>Buy Tickets</button>
    </div>
    
    
    </>
  )
}

export default Card1