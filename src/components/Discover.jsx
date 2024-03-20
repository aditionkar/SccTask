import React from 'react'

function Discover() {
  return (
   <>
   <div className="top">
     <img src='./images/discover.jpg' className='h-[550px] w-[1100px] ml-[100px]'></img>
   </div>

   <div className="down flex flex-row justify-between  mx-[350px] pt-10">
      <div className="lft w-[1600px] ">
         <p className="text-4xl font-bold text-green10">Designing a universe</p>
      </div>

      <div className="rgt  ">
        <p className='text-xl'>We’re building the Humankind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.</p>
        <button className='border-[3px] border-green10 rounded-[35px] mt-5 h-16 w-[170px] mt-4 text-lg font-semibold hover:bg-green10 hover:text-white'>Discover the Art</button>
      </div>
   </div>
   </>
  )
}

export default Discover