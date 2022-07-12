import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Store from '../sections/Store'
import {AiFillApple} from 'react-icons/ai'

function header() {
  return (
    <Router>
    <div className=' text-gray-300 flex items-center content-center ml-auto mr-auto w-full h-12 bg-zinc-800'>
     
      <ul className='  flex space-x-9 items-center content-center ml-auto mr-auto'>
        <AiFillApple className=' hover:text-white' size="20"  />
        <li className=' hover:text-white'>
          <Link to='/Store'>{Store}Store</Link>
          </li>
        <li className=' cursor-pointer hover:text-white'>Mac</li>
        <li className=' cursor-pointer hover:text-white'>iPad</li>
        <li className=' cursor-pointer hover:text-white'>iPhone</li>
        <li className=' cursor-pointer hover:text-white'>Whatch</li>
        <li className=' cursor-pointer hover:text-white'>AirPods</li>
        <li className=' cursor-pointer hover:text-white'>TV & Home</li>
        <li className=' cursor-pointer hover:text-white'>Only on Apple</li>
        <li className=' cursor-pointer hover:text-white'>Accesories</li>
        <li className=' cursor-pointer hover:text-white'>Support</li>

        <svg className=' hover:text-white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>

      <svg className=' hover:text-white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>

      </ul>
     
     
    </div>
    </Router>
  )
}

export default header