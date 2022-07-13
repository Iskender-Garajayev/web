import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Store from '../sections/Store'
import Apple from '../sections/Apple'
import Ipad from '../sections/Ipad'
import Whatch from '../sections/Whatch'
import Iphone from '../sections/Iphone'
import Support from '../sections/Support'
import Tvhome from '../sections/Tvhome'
import Accesories from '../sections/Accesories'
import Airpods from '../sections/Airpods'
import Mac from '../sections/Mac'
import Main from '../main/Main'
import {AiFillApple, AiOutlineSearch, } from 'react-icons/ai'
import {FaShoppingBag} from 'react-icons/fa'


function header() {
  return (
    <Router>
    <div className=' text-gray-300 flex items-center content-center ml-auto mr-auto w-full h-12 bg-zinc-800'>
      <ul className='  flex space-x-9 items-center content-center ml-auto mr-auto'>
        <Link to='/Home' ><AiFillApple className=' hover:text-white' size="20"  /></Link>
        <li className=' hover:text-white'>
          <Link to='/Store'>Store</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/Mac' >Mac</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/iPad' >iPad</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/iPhone' >iPhone</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/Whatch' >Whatch</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/AirPods' >AirPods</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/Tvhome' >TV & Home</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/Apple' >Only on Apple</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/Accesories' >Accesories</Link>
        </li>
        <li className=' cursor-pointer hover:text-white'>
          <Link to='/Support' >Support</Link>
        </li>

        <AiOutlineSearch className=' cursor-pointer hover:text-white' size="20"/>
        <FaShoppingBag icon="fa-thin fa-bag-shopping" />
        


      <svg className=' hover:text-white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
      </ul>
    </div>
      <Routes>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/Accesories' element={<Accesories/>}/>
        <Route path='/Airpods' element={<Airpods/>}/>
        <Route path='/Ipad' element={<Ipad/>}/>
        <Route path='/Iphone' element={<Iphone/>}/>
        <Route path='/Mac' element={<Mac/>}/>
        <Route path='/Support' element={<Support/>}/>
        <Route path='/Tvhome' element={<Tvhome/>}/>
        <Route path='/Whatch' element={<Whatch/>}/>
        <Route path='/Apple' element={<Apple/>}/>
        <Route path='/Home' element={<Main/>}/>
      </Routes>
    </Router>
  )
}

export default header