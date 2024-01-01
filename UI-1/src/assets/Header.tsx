import React from 'react'

function Header() {
  return (
    <div>
      <div className='pt-10 items-center justify-center flex flex-col sm:place-content-around sm:p-4 sm:flex-row '>
      <p><b>Landrick.</b></p>
      <nav >
        
        <ul className='flex flex-col sm:flex-row gap-x-10 gap-y-2'>
          <li><a className='text-blue-500' href="">Home</a></li>
          <li><a href="">Landing</a></li>
          <li><a href="">Pages</a></li>
          <li><a href="">contact</a></li>
        </ul>
       
      </nav>
      <button className='bg-blue-700 rounded-md text-white p-2  text-sm'><b>Buy Now</b></button>
      </div>
    </div>
  )
}

export default Header
