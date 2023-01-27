import React from 'react'

const Message = ({ variant, children }) => {
  console.log(variant)
  return (
    <>
      {variant === 'danger' ? (
        <div
          className='bg-message-red-100 border border-message-red-400 text-[35px] text-message-red px-4 py-3 rounded relative'
          role='alert'
        >
          <strong className='font-bold'>{children}</strong>
        </div>
      ) : (
        <div
          className='bg-green-100 border border-green-400 text-[35px] text-green px-4 py-3 rounded relative'
          role='alert'
        >
          <strong className='font-bold'>{children}</strong>
        </div>
      )}
    </>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
