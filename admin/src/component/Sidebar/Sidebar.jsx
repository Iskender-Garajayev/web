import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SidebarData } from '../../Data/Data'
import {IoArrowRedoOutline} from 'react-icons/io5'


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
        {SidebarData.map((item, index) =>{
          return(
            <div key={index} className="menuItem">
                <item.icon/>
                <span>{item.heading}</span>
            </div>
          )
        })}
        <div className="menuItem">
        <IoArrowRedoOutline/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar