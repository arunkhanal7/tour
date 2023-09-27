import React from 'react'

const Navbar = ({month,isSold}) => {

  return (
    <>

      <div className ='months'>
        {month}
       <span className='sold'> {isSold && 'Sold out'} </span>
      </div>
    

    </>
  )
}

export default Navbar