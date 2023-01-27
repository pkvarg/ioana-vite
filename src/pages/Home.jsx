import React from 'react'
import { Link } from 'react-router-dom'
import { Hero, About, Gallery } from '../sections'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
    </>
  )
}

export default Home
