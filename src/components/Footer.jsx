import React from 'react'

const Footer = () => {
  return (
    <div className='bg-skin-color'>
      <div className='bg-hero-grey steep-footer md:pb-[50px] relative'>
        <h1 className='text-[35px] text-dark-red ml-[40%] absolute top-[45%]'>
          Copyright &copy; {Date().substring(11, 15)} ioana-illustrations.eu
        </h1>
        <h1 className='text-[35px] text-dark-red ml-[40%] absolute top-[60%]'>
          info@ioana-illustrations.eu
        </h1>
        <a
          className='text-[35px] text-dark-red ml-[40%] absolute top-[75%]'
          href='https://pictusweb.sk'
          target='_blank'
        >
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
      </div>
    </div>
  )
}

export default Footer
