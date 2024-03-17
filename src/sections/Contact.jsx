import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Message from '../components/Message'
import axios from 'axios'

const Contact = () => {
  const [message, setMessage] = useState(null)
  const [messageSuccess, setMessageSuccess] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mailMessage, setMailMessage] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
  }

  const form = useRef()
  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseBots = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.com/api/bots/io/increase`,
      // `http://localhost:2000/api/bots/io/increase`,

      config
    )
    // setBotsCount(data)
    // console.log('ctc:', data)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      setMessage('Message failed! Try again later, please.')
      setName('')
      setEmail('')
      setMailMessage('')
      increaseBots()
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_USER
        )
        .then(
          (result) => {
            console.log(result.text)
            setMessageSuccess('Message successfully sent!')
            console.log('message sent')
          },
          (error) => {
            setMessage('Error! Try again later, please.')
            console.log(error.text)
          }
        )
      setName('')
      setEmail('')
      setMailMessage('')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='bg-skin-color'>
      <h1 id='contact' className='text-[40px] text-center lg:pt-0 pt-[55px]'>
        Contact Me
      </h1>
      <div className='flex lg:flex-row flex-col lg:justify-center items-center  gap-[10%] py-[100px]'>
        <img
          className='lg:w-[30%] 2xl:w-[20%] w-[85%] h-auto rounded-xl hover:scale-[103%]'
          src='/ioana-contact.webp'
          alt='photo of a beautiful girl'
        />
        <div className='lg:w-[33%] w-[85%] lg:pt-0 pt-[150px]'>
          {messageSuccess && (
            <Message variant='success'>{messageSuccess}</Message>
          )}
          {message && <Message variant='danger'>{message}</Message>}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-[2.5px] lg:text-[35px] text-[55px]'
            >
              <label className='form-label'>
                Your message <sup>*</sup>
              </label>
              <textarea
                className='form-control rounded-xl'
                rows='5'
                name='message'
                value={mailMessage}
                onChange={(e) => setMailMessage(e.target.value)}
                required='required'
              ></textarea>
              <label className='form-label'>
                Name <sup>*</sup>
              </label>
              <input
                className='form-control rounded-xl'
                type='text'
                name='user_name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required='required'
              />

              <label className='form-label'>
                Email <sup>*</sup>
              </label>
              <input
                className='form-control rounded-xl'
                type='email'
                name='user_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required='required'
              />

              <div className='flex flex-row items-center form-check my-3'>
                <input
                  id='flexCheckDefault'
                  type='checkbox'
                  defaultChecked={false}
                  value={checkBox}
                  onChange={handleCheckBox}
                  required='required'
                  className='rounded-xl'
                />
                <label
                  className='form-check-label lg:text-[30px] text-[40px] ml-[15px]'
                  htmlFor='flexCheckDefault'
                >
                  I agree to process my data
                </label>
              </div>
              <input
                className='form-control hidden'
                type='text'
                defaultValue={passwordGroupOne}
                onChange={(e) => setPasswordGroupOne(e.target.value)}
              />
              <input
                className='form-control hidden'
                type='text'
                defaultValue={passwordGroupTwo}
                onChange={(e) => setPasswordGroupTwo(e.target.value)}
              />
              <button
                className='bg-btn-blue mt-3 rounded-xl hover:bg-skin-color hover:border hover:border-dark-red hover:text-dark-red'
                type='submit'
                value='Send'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
