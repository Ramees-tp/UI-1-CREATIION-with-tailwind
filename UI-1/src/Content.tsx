import React from 'react'
import img1 from '../src/assets/img/home_page_rocket.svg'

function Content() {
  return (
    <div>
      <div className=' space-y-10 sm:flex place-content-around  p-24 bg-slate-00 '>
        <div className='space-y-6 sm:flex flex-col place-content-around'>
            <div className='max-w-lg'>
                <h1 className='text-3xl text-center sm:text-5xl leading-snug'>Our Creativity Is Your <span className='text-sky-700'>Success</span></h1>
                <p className='sm:mt-8 text-gray-500'>launch your campaign and benefits from our expertise in designing and managing conversion centerd bootsrap for html page</p>
            </div>
            <div className='space-y-4 sm:flex flex-row gap-4  items-center'>
                <button className="bg-blue-700 rounded w-32 h-8 text-white outline outline-blue-700">Get started</button>
                <button className="outline outline-blue-500 rounded w-32 h-8 text-blue-700 " >Documentaion</button>
            </div>
            
        </div>
        <div className='flex items-center justify-items-center'>
            <img className='w-80' src={img1} alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Content
