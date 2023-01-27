import React from 'react'
import { Link } from 'react-router-dom'
import { Hero, About, Gallery, Contact } from '../sections'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </>
  )
}

export default Home
