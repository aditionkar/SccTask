import React from 'react'

function Join() {
  return (
    <div >
        <img className="h-[400] w-[550px] mt-28 ml-[380px]" src="./images/join.webp"></img>
        <h1 className="mt-7 font-bold text-4xl text-center text-green10">Join our Adventure</h1>
        <p className="px-[300px] text-center mt-5 text-xl" >
            Despite the many evil forces in the world, there is hope. We can still make a positive difference through art and community. We’re looking for other geeks, punks, and freaks like us who believe in the power of storytelling to be a part of our quest.
        </p>
        <button className="h-[60px] w-[180px] bg-green10 border-[2px] border-green10 hover:bg-green2 hover:text-black rounded-[30px] font-semibold text-base text-white mt-5 ml-[555px]" >Join our Discord</button>


    </div>
  )
}

export default Join