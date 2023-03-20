import React, { useState } from 'react'

import { Footer } from '../components'
import { Hero, About, Gallery, Contact } from '../sections'
import CookieConsent from 'react-cookie-consent'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import axios from 'axios'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const Home = () => {
  const [cookieAccept, setCookieAccept] = useState(false)
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsDeclined = async () => {
    const { data } = await axios.put(
      `https://pictusweb.online/api/visitors/io/increase`,
      // `http://localhost:2000/api/visitors/io/increase`,
      config
    )
    console.log('vstrsDec:', data.visitorsDeclinedIo)
  }

  const increaseVisitorsAgreed = async () => {
    const { data } = await axios.put(
      `https://pictusweb.online/api/visitors/io/agree/increase`,
      // `http://localhost:2000/api/visitors/io/agree/increase`,
      config
    )
    //console.log('vstrsAgr:', data.visitorsAgreedIo)
  }

  // Initialize Firebase
  if (cookieAccept) {
    const app = initializeApp(firebaseConfig)
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
