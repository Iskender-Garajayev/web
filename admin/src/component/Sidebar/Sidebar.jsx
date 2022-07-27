import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className='logo' >
        <img src={Logo} alt="logo" />
        <span>Sh<span>o</span>ps</span>
      </div>
    </div>
  )
}

export default Sidebar