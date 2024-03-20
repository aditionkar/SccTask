import React from 'react'

function Footer() {
  return (
   <>
   <div className="comp flex flex-row justify-between mt-20 mb-[30px]">
   <div className="lft mt-[180px] ml-32">
     <p className='text-5xl font-extrabold text-green10'>humankind</p>
     <p className='mt-2 text-lg'>stay human. be kind</p>
     <div className="icons flex flex-row mt-6 ml-[-20px]">
        <img src='./images/f1.svg'className='h-[30px] w-[30px] mx-4' ></img>
        <img src='./images/f2.svg' className='h-[30px] w-[30px]  mx-4'></img>
        <img src='./images/f3.svg'className='h-[30px] w-[30px]  mx-4'></img>
        <img src='./images/f4.svg'className='h-[30px] w-[30px]  mx-4'></img>
        <img src='./images/f5.svg'className='h-[30px] w-[30px]  mx-4'></img>
     </div>

     <div className="btns ml-[-20px] flex flex-row mt-8">
              <button className='bg-green10 rounded-3xl h-12 w-[150px] text-md px-2 mr-10 font-semibold text-white hover:bg-green2 hover:text-black hover:border-2'>Play Now!</button>
              <button className='border-2 border-green10 rounded-3xl h-12 w-[200px] text-md px-2 mr-10 font-semibold hover:shadow-2xl'>Join our Discord</button>
     </div>
   </div>

   <div className="rgt">
      <img src='./images/foot.jpg' className='h-[550px] w-[550px] mr-32'></img>
   </div>
   </div>
  
   </>
  )
}

export default Footer