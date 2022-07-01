import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'

function Header() {
  return (
    <div className='header_all'>
      {/* logo */}
      <div>
        <img className='header_logo' src={logo} alt="logo" />
      </div>

      {/* models */}
      <div className='header_models'>
        <ul>
          <li>Mosel S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </ul>
      </div>


      {/* navbar */}
      <div className='header_navbar'>
        <ul>
          <li>Shop</li>
          <li>Account</li>
          <li>Menu</li>
        </ul>
      </div>
    </div>
  )
}

export default Header