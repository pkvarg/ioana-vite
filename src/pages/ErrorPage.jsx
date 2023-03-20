import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Oops! This site does not exist.</h1>
      <Link className='error-link' to='/'>
        Back to the Main Page.
      </Link>
    </div>
  )
}

export default ErrorPage
