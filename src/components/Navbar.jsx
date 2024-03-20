import React from 'react'

function Navbar() {
  return (
    <>
    <div className="nav flex flex-row justify-between py-2 px-4 fixed bg-green4">
        <div className="lft flex flex-row font-bold ">
            <img src='./images/logo.svg' className='h-10 w-10 '></img>
            <p className='px-1.5 pt-1 text-[18px] font-bold '>humankind</p>
        </div> 

        <div className="rgt flex flex-row pl-[550px] font-bold">
            <ul className='flex flex-row pr-4 text-[14px] pt-[5px]'>
                <li className='px-4 hover:text-gray' >Wrestle</li>
                <li className='px-4 hover:text-gray'>Collectibles</li>
               <li className='px-4 hover:text-gray'>Shop</li>
                <li className='px-4 hover:text-gray'>Community</li>
                <li className='px-4 hover:text-gray'>Subscribe</li>
            </ul>

            <button className='bg-green10 text-white px-8 text-sm rounded-3xl'>Play Now!</button>
        </div>
    </div>
    </>
  )
}

export default Navbar