import React from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  return (
    <div className='bg-skin-color'>
      <div className='bg-gallery2 steep-gallery md:pb-[50px]'>
        <h1
          id='gallery'
          className='text-[60px] lg:pt-[200px] pb-[100px] pt-[100px] text-center'
        >
          Gallery
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 3 }}
          className='grid lg:grid-cols-4 justify-items-center lg:gap-0 gap-[30px]'
        >
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/winter_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='../gallery/ethereal_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='../gallery/halftone_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='../gallery/geometrical_web.jpg'
            alt='Photo of a beautiful girl'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 3 }}
          className='grid lg:grid-cols-4 mt-8 justify-items-center lg:gap-0 gap-[30px]'
        >
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/b-a_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/autumn_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/birthday_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/cool_web.jpg'
            alt='Photo of a beautiful girl'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 3 }}
          className='grid lg:grid-cols-4 mt-8 justify-items-center lg:gap-0 gap-[30px]'
        >
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/disco_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/hippie_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='gallery/pink_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='gallery/oriental_web.jpg'
            alt='Photo of a beautiful girl'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 3 }}
          className='grid lg:grid-cols-4 mt-8 justify-items-center lg:gap-0 gap-[30px]'
        >
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/red_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/selfie_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/selfportrait_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional1_web.jpg'
            alt='Photo of a beautiful girl'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 3 }}
          className='grid lg:grid-cols-4 mt-8 justify-items-center lg:gap-0 gap-[30px]'
        >
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/traditional2_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/traditional3_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional4_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional5_web.jpg'
            alt='Photo of a beautiful girl'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 3 }}
          className='grid lg:grid-cols-4 mt-8 justify-items-center lg:gap-0 gap-[30px] pb-[100px]'
        >
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/traditional6_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/90s_web.jpg'
            alt='Photo of a boy'
          />
          {/* <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional4_web.jpg'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[85%] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional5_web.jpg'
            alt='Photo of a beautiful girl'
          /> */}
        </motion.div>
      </div>
    </div>
  )
}

export default Gallery
