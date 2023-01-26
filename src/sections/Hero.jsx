'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { heroFeatures } from '../constants'
import { HeroFeatures, TitleText, TypingText } from '../components'
import { planetVariants, staggerContainer, fadeIn } from '../motion'

const Hero = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.95] flex justify-center items-center flex-col'
      >
        <h2 className='text-[46px]'>Welcome to</h2>
        <TypingText title='IoanaM Illustrations' />
        <h2 className='text-[40px]'>Passion for photography</h2>
        <h2 className='text-[40px]'>and digital design</h2>
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {/* {heroFeatures.map((feature) => (
            <HeroFeatures key={feature.title} {...feature} />
          ))} */}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/ioana-hero.jpg'
          alt='get-started'
          className='w-[90%] h-[90%] object-contain hover:scale-[103%]'
        />
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
