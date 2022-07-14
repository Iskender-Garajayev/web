import React from 'react'
import sg from '../../img/sg.png'

function Store() {
  return (
    <div className=' grid grid-cols-6 gap-4 w-4/5 ml-auto mr-auto pt-32'>
      <div className=' col-start-1 col-end-5 text-5xl font-bold text-gray-500 '><span className=' text-5xl font-bold text-black' >Store. </span>The best wey to buy the products you love.</div>
      <div className=' col-end-7 col-span-2 gap-6 flex' >
        <img className=' rounded-full w-10 h-10 mt-2' src={sg} alt="Support" />
        <div  >
          <div className=' font-bold'>Need shopping help?</div>
          <div className=' text-blue-600 font-medium'>Ask a Specialist</div>
        </div>
      </div>
      <div className=' col-end-7 col-span-2 gap-6 flex' >
        <img className=' rounded-full w-10 h-10 mt-2' src={sg} alt="Support" />
        <div  >
          <div className=' font-bold'>Need shopping help?</div>
          <div className=' text-blue-600 font-medium'>Ask a Specialist</div>
        </div>
      </div>
    </div>
  )
}

export default Store