import React from 'react'

function Home() {
  return (
    <>
    <div className="home bg-green2 h-[730px]">
      <div className="img mb-52 pt-[120px]">
        <img src='./images/Human.png'className=' z-0 px-20 '></img>
        <img src='./images/Kind.png'className=' z-10 px-20 absolute mt-[-245px]'></img>
      </div>
        <p className='text-center text-3xl font-semibold text-black '>Creating a magical world for the kid in all of us.</p>
           <div className="btns flex justify-center pt-10">
              <button className='border-2 border-green10 rounded-3xl h-12 w-[200px] text-md px-2 mr-10 font-semibold bg-white hover:shadow-2xl'>Get a Lunchbox</button>
              <button className='bg-green10 border-2 border-green10 rounded-3xl h-12 w-[150px] text-md px-2 mr-10 font-semibold text-white hover:bg-green2 hover:text-black hover:shadow-2xl'>Play Now!</button>
           </div>
        
    </div>
    </>

  )
}

export default Home