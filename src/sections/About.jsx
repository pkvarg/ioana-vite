import React from 'react'

const About = () => {
  return (
    <>
      <div className='bg-skin-color'>
        <h1 className='text-[60px] py-[100px] text-center'>About Me</h1>
        <div className='my-30 flex flex-col lg:flex-row items-center justify-center pb-[100px]'>
          <div className='flex flex-col text-[46px] gradient-about px-12 lg:py-2 py-8 rounded-xl'>
            <p className='text-center'>Hi, my name is Ioana Mîndrilă </p>
            <p className='text-center'>
              {' '}
              I live in Romania and I studied graphic design
            </p>
            <p className='text-center'>
              {' '}
              at George Enescu University of Arts of Iași.
            </p>
            <p className='text-center'>My passions are photograhpy, drawing</p>
            <p className='text-center'>and digital art.</p>
            <p className='text-center'>I love doing vector portraits</p>
            <p className='text-center'>I am specialized in making logos,</p>
            <p className='text-center'>visual identities,</p>
            <p className='text-center'> flyers, invitations, visit cards.</p>
            <p className='text-center'>Hope you enjoy my work :D</p>
          </div>

          <div className='lg:ml-[12%] lg:pt-[30px] lg:mt-[0px] mt-[100px] flex flex-col gap-[15px] text-[46px]'>
            <div className='flex flex-row items-center gap-[15px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-10 h-10'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p>Portraits</p>
            </div>
            <div className='flex flex-row items-center gap-[15px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-10 h-10'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p>Logos</p>
            </div>
            <div className='flex flex-row items-center gap-[15px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-10 h-10'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p>Invitation Cards</p>
            </div>
            <div className='flex flex-row items-center gap-[15px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-10 h-10'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p>Business Cards</p>
            </div>
            <div className='flex flex-row items-center gap-[15px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-10 h-10'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p>Flyers</p>
            </div>
            <div className='flex flex-row items-center gap-[15px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-10 h-10'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p>Visual Identities</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
