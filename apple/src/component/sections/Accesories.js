import React from 'react'
import {AiOutlineDown} from 'react-icons/ai'

function Accesories() {
  return (
    <div className=' flex justify-between ml-auto mr-auto  content-center items-center w-4/5 '>
      <h3 className=' text-2xl cursor-pointer'>Accesories</h3>
      <h4 className='flex content-center items-center'>Browse all <AiOutlineDown size='10' /> </h4>
      
    </div>
  )
}

export default Accesories