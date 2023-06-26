import React from 'react'
import HeroImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full mt-80'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Full Stack Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi fugit facilis quidem minus? Placeat voluptatum alias culpa id sunt?</p>

            <div>
                <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>portfolio</button>
            </div>
        </div>
        <div>
            <img className='w-80 rounded-2xl  ' src={HeroImage} alt="hero" />
        </div>
     </div>
    </div>
  )
}

export default Home
