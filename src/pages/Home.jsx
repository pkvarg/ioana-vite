import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components'
import { Hero, About, Gallery, Contact } from '../sections'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
