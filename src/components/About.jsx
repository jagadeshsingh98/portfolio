import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full  bg-gradient-to-b from-gray-800 to-black text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div  className='pb-8 mt-10 sm:mt-50'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '> About</p>
        </div>


        <p className='text-xl mt-20 '>In addition to my technical expertise, I bring a keen eye for design and a strong sense of user experience to my projects. I believe that a successful website not only functions flawlessly but also engages and delights users. By incorporating principles of visual design, usability, and interactivity, I strive to create intuitive and immersive digital experiences. I am driven by a constant desire to learn and improve, always seeking new ways to push boundaries and deliver cutting-edge solutions.</p>

        <br />

        <p className='text-xl'>Beyond the realm of coding, I am a proactive and adaptable team player. I thrive in collaborative environments where diverse perspectives come together to drive innovation. I am a clear and effective communicator, adept at translating technical concepts into understandable language for clients and stakeholders. With a commitment to meeting deadlines and exceeding expectations, I am confident in my ability to contribute to the success of any project.</p>
        <br />

        <p className='text-xl'>Thank you for taking the time to learn more about me. I invite you to explore my portfolio and get in touch to discuss how we can work together to create remarkable digital experiences. Let's turn ideas into reality and make a lasting impact in the world of web development.</p>
      </div>
    </div>
  )
}

export default About
