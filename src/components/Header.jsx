import React from 'react'

const Header = ({message = "Lddd"}) => {
  return (
    <div>
      <ul className='bg-red-200 mt-10 flex justify-center flex-col mx-auto uppercase'>
        {message}
      </ul>
    </div>
  )
}
export default Header
