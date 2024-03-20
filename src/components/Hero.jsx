import React from 'react'

function Hero() {
  return (
    <div>
        <div id="first" class=" w-[1100px] h-[530px] mx-[110px] my-[70px] border-[5px] border-green10 rounded-3xl flex" >
            <div className="h-[530px] w-[530px] ">
                <img className="h-[480px] mx-5 mt-5 w-[480px] rounded-md" src="./images/wrestle.webp"></img>
            </div>
            <div className="h-[530px] w-[550px] ">
                <h1 className="pt-28 pl-2 font-bold text-4xl">Wrestle. Wrestle. Wrestle! </h1>
                <p className="mt-4 mx-2 text-lg">
                Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.
                </p>
                <div className="flex mt-5">
                    <button className="h-[60px] w-[150px] bg-green10 border-green10 border-[2px] rounded-[40px] font-semibold text-base text-white hover:bg-green4 hover:text-black" >Learn More</button>
                    <button className=" ml-2 h-[60px] w-[150px] bg-white  border-[2px] border-green10 rounded-[40px] font-semibold text-base text-black" >Wrestle Now!</button>
                </div>
            </div>
        </div>


        <div id="second" class=" w-[1100px] h-[630px] mx-[110px] my-[70px] border-[5px] border-green10 rounded-3xl flex" >
            <div className="h-[630px] w-[550px] ">
                <img className="h-[580px] mx-5 mt-5 w-[480px] rounded-md" src="./images/herokind.webp"></img>
            </div>
            <div className="h-[630px] w-[550px] ">
                <h1 className="pt-32 pl-2 font-bold text-5xl">Play Herokind!</h1>
                <p className="mt-4 mx-2 text-lg">
                Herokind is a unique game made just for Humankind NFT collectors. It combines the fun of collectibles with the anticipation of daily adventure events.
                </p>
                <p className="mt-4 mx-2 text-lg">
                Send your Humankind collectibles to places like Tenotch Forest, Skull Volcano, and Cloud Island, where the environment and events are unpredictable and can change at any time.
                </p>
                <div className="flex mt-5">
                    
                    <button className=" ml-2 h-[60px] w-[150px] bg-white  border-[2px] border-green10 rounded-[40px] font-semibold text-base text-black" >Play Now!</button>
                </div>
            </div>
        </div>


        <div id="third" class=" w-[1100px] h-[530px] mx-[110px] my-[70px] border-[5px] border-green10 rounded-3xl flex" >
            <div className="h-[530px] w-[520px] ">
                <img className="h-[480px] mx-5 mt-5 w-[480px] rounded-md" src="./images/humankind.webp"></img>
            </div>
            <div className="h-[530px] w-[550px] ">
                <h1 className="pt-28 pl-2 font-bold text-4xl">Bring your ideas to life with the Humankind Fund</h1>
                <p className="mt-4 mx-2 text-lg">
                The Humankind Fund is a community-driven initiative that supports and empowers projects that share the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact on the world.
                </p>
                <div className="flex mt-5">
                    
                    <button className=" ml-2 h-[60px] w-[150px] bg-white  border-[2px] border-green10 rounded-[40px] font-semibold text-base text-black" >Learn More
                    </button>
                </div>
            </div>
        </div>


        <div id="fourth" class=" w-[1100px] h-[500px] mx-[110px] my-[70px] border-[5px] border-green10 rounded-3xl flex" >
            <div className="h-[500px] w-[450px] ">
                <img className="h-[260px] mx-5 mt-20 w-[380px] rounded-md" src="./images/lunchboxes.gif"></img>
            </div>
            <div className="h-[500px] w-[600px] ">
                <h1 className="pt-16 pl-2 font-bold text-4xl">Grab your lunchbox. It will be a long journey.</h1>
                <p className="mt-4 mx-2 text-lg">
                We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey!
                </p>
                <p className="mt-4 mx-2 text-lg">
                Every lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year.
                </p>
                <div className="flex mt-4">
                    <button className="h-[60px] w-[200px] bg-green10 border-green10 border-[3px] rounded-[40px] font-semibold text-base text-white hover:bg-green4 hover:text-black" >Get one from Opensea</button>
                    <button className=" ml-2 h-[60px] w-[150px] bg-white  border-[2px] border-green10 rounded-[40px] font-semibold text-base text-black" >Learn More</button>
                </div>
            </div>
        </div>
       

    </div>
  )
}

export default Hero