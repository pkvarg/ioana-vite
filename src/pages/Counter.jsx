import React, { useState } from 'react'
import axios from 'axios'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [visitorsAgreed, setVisitorsAgreed] = useState(0)
  const [visitorsDeclined, setVisitorsDeclined] = useState(0)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getBots = async () => {
    const { data } = await axios.get(
      `https://pictusweb.online/api/bots/io/counter`,
      // `http://localhost:2000/api/bots/io/counter`,

      config
    )
    setCount(data)
  }

  const getVisitors = async () => {
    const { data } = await axios.get(
      `https://pictusweb.online/api/visitors/io/counter`,

      // `http://localhost:2000/api/visitors/io/counter`,

      config
    )
    setVisitorsAgreed(data.agreed)
    setVisitorsDeclined(data.declined)
  }
  return (
    <div className='p-10 text-[35px]'>
      <button
        className='border px-2 hover:p-[15px]'
        onClick={() => {
          getBots()
          getVisitors()
        }}
      >
        Display stats
      </button>
      <div className='mt-4'>
        <p>Bots: {count}</p>
        <p>Visitors dec: {visitorsDeclined}</p>
        <p>Visitors OK: {visitorsAgreed}</p>
        <p>
          Visitors Total: {Number(visitorsAgreed) + Number(visitorsDeclined)}
        </p>
      </div>
    </div>
  )
}

export default Counter
