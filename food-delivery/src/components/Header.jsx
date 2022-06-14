import React from 'react'
import Logo from './img/logo.png'

const Header = () => {
  return (
    <div className=' fixed z-50 w-screen bg-slate-300 p-6 px-16'>
      {/* desctop & tablet */}
      <div className='hidden md:flex w-full h-full'>
        <div className='flex items-center gap-2'>
          <img className='w-8 object-cover' src={Logo} alt='logo'/>
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>

        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Service</li>
        </ul>
      </div>

      {/* mobile */}
      <div className='flex md:hidden w-full h-full'></div>
    </div>
  )
}

export default Header