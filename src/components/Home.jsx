import React from 'react'
import HeroImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full mt-60'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white '>
                I'm a Front-End Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>I'm jagadesh, a passionate and creative front-end developer with a knack for crafting captivating and user-friendly web experiences. With a keen eye for design and a strong command over the latest front-end technologies, I specialize in turning ideas into stunning digital realities..</p>

            <div>
                <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>portfolio</button>
            </div>
        </div>
        <div>
            <img className='w-80 rounded-2xl ' src={HeroImage} alt="hero" />
        </div>
     </div>
    </div>
  )
}

export default Home
