import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from './../motion'
import styles from '../styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <motion.nav variants={navVariants} initial='hidden' whileInView='show'>
      <nav className='w-full bg-white'>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              <Link to='/'>
                <img
                  src='/ioana_logo.png'
                  alt='search'
                  className='w-[140px] h-[auto] object-contain'
                />
              </Link>
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li>
                  <Link
                    to='#about'
                    className='text-dark-red text-[32px] hover:text-nav-yellow'
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to='#gallery'
                    className='text-dark-red text-[32px] hover:text-nav-yellow'
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to='#webs'
                    className='text-dark-red text-[32px] hover:text-nav-yellow'
                  >
                    Webs
                  </Link>
                </li>
                <li>
                  <Link
                    to='#contact'
                    className='text-dark-red text-[32px] hover:text-nav-yellow'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className='flex flex-col my-8 py-2 px-2 text-center'>
        <h1 className='text-dark-red text-[60px]'>IoanaM ILLUSTRATIONS</h1>
        <h2 className='text-dark-red text-[30px]'>
          Portraits, logos, invitation cards, business cards, flyers,visual
          identities
        </h2>
      </div> */}
    </motion.nav>
  )
}

export default Navbar
