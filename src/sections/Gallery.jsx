import React from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  return (
    <div className='bg-skin-color'>
      <div className='bg-gallery2 steep-gallery md:pb-[50px] 2xl:px-[10%]'>
        <h1
          id='gallery'
          className='text-[40px] lg:pt-[200px] pb-[100px] pt-[100px] text-center'
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
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/winter_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='../gallery/ethereal_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='../gallery/halftone_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='../gallery/geometrical_web.webp'
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
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/b-a_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/autumn_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/birthday_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/cool_web.webp'
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
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/disco_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/hippie_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='gallery/pink_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='gallery/oriental_web.webp'
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
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/red_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/selfie_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/selfportrait_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional1_web.webp'
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
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/traditional2_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/traditional3_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional4_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional5_web.webp'
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
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/traditional6_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:ml-[25%]'
            src='/gallery/90s_web.webp'
            alt='Photo of a boy'
          />
          {/* <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional4_web.webp'
            alt='Photo of a beautiful girl'
          />
          <img
            className='w-[300px] rounded-[25px] hover:scale-[133%] hover:mr-[25%]'
            src='/gallery/traditional5_web.webp'
            alt='Photo of a beautiful girl'
          /> */}
        </motion.div>
      </div>
    </div>
  )
}

export default Gallery
