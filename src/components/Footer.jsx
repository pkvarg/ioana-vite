import React from 'react'

const Footer = () => {
  return (
    <div className='bg-skin-color'>
      <div className='bg-hero-grey steep-footer md:pb-[50px] relative'>
        <h1 className='text-[35px] text-dark-red lg:ml-[40%] ml-[5px] absolute lg:top-[45%] top-[30%]'>
          Copyright &copy; {Date().substring(11, 15)} ioana-illustrations.eu
        </h1>
        <a
          href='mailto:info@ioana-illustrations.eu'
          className='text-[35px] text-dark-red lg:ml-[40%] ml-[15px] absolute lg:top-[60%]  top-[55%]'
        >
          info@ioana-illustrations.eu
        </a>
        <a
          className='text-[35px] text-dark-red lg:ml-[40%] ml-[15px] absolute lg:top-[75%] top-[70%]'
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
