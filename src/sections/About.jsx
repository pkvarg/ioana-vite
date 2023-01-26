import React from 'react'

const About = () => {
  return (
    <>
      <div className='bg-skin-color'>
        <h1 className='text-[60px] py-[100px] text-center'>About Me</h1>
        <div className='my-30 flex flex-col lg:flex-row pb-[100px]'>
          <img
            src='/about-me-en.jpg'
            alt='about-ioana-illustrations'
            className='mx-[5%] w-[40%] h-auto rounded-xl'
          />
          <div className='mx-[22.5%] p-[30px] flex flex-col gap-[15px] align-end text-[46px]'>
            <p>Portraits</p>
            <p>Logos</p>
            <p>Invitation Cards</p>
            <p>Business Cards</p>
            <p>Flyers</p>
            <p>Visual Identities</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
