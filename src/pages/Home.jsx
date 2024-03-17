import React, { useState } from 'react'

import { Footer } from '../components'
import { Hero, About, Gallery, Contact } from '../sections'
import CookieConsent from 'react-cookie-consent'
import { getAnalytics } from 'firebase/analytics'
import axios from 'axios'
import { app } from './../App'

const Home = () => {
  const [cookieAccept, setCookieAccept] = useState(false)
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsDeclined = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.com/api/visitors/io/increase`,
      // `http://localhost:2000/api/visitors/io/increase`,
      config
    )
    console.log('vstrsDec:', data.visitorsDeclinedIo)
  }

  const increaseVisitorsAgreed = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.com/api/visitors/io/agree/increase`,
      // `http://localhost:2000/api/visitors/io/agree/increase`,
      config
    )
    //console.log('vstrsAgr:', data.visitorsAgreedIo)
  }

  // Initialize Firebase
  if (cookieAccept) {
    const analytics = getAnalytics(app)
  }
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <CookieConsent
        location='bottom'
        style={{
          background: '#adbbcb',
          color: '#000',
          fontSize: '22.5px',
          textAlign: 'justify',
        }}
        buttonStyle={{
          background: '#1d9f2f',
          color: '#fff',
          fontSize: '17.5px',
        }}
        buttonText='Agree'
        expires={365}
        enableDeclineButton
        onDecline={() => {
          setCookieAccept(false)
          increaseVisitorsDeclined()
        }}
        declineButtonStyle={{
          background: 'red',
          color: '#fff',
          fontSize: '17.5px',
        }}
        declineButtonText='Decline'
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsAgreed()
        }}
      >
        This website uses analytical and operation necessary cookies. We use
        neither functional nor marketing cookies.{' '}
        {/* <a href='/gdpr'> GDPR</a> */}
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Home
