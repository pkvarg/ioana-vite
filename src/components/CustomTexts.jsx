'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../motion'

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal lg:text-[80px] sm:text-[50px] text-dark-red ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] font-normal md:text-[64px] text-[40px] text-dark-red ${textStyles}`}
  >
    {title}
  </motion.h2>
)
