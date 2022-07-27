import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      {/* Logo */}
      <div className='logo' >
        <img src={Logo} alt="logo" />
        <span>Z<span>oo</span> Sh<span>o</span>ps</span>
      </div>
      {/* menu */}

      <div className="menu">
        <div className="menuItem">
          <div>
            icons
          </div>
          <span>Dashbord</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar