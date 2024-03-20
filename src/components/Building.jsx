import React from 'react'

function Building() {
  return (
    <div className="flex">
        <img className="h-[800px] w-[1100px]" src="./images/building.png"></img>
        <div id="text" className="ml-10">
            <h1 className="font-bold text-4xl pt-60 text-green10">Building together</h1>
            <p className="text-2xl mt-5 mr-10" >Our mission is to entertain and inspire people all over the globe through the power of art, kindness, and unique storytelling in web3.</p>
            <button className=" mt-5 ml-2 h-[60px] w-[150px] bg-white  border-[3px] border-green10 rounded-[40px] font-semibold text-base text-black hover:bg-green10 hover:text-white" >Explore Careers</button>

        </div>

    </div>
  )
}

export default Building