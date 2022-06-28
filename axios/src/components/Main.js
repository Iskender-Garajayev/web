import React from 'react'
// import './Main.css'
// import pp1 from '../img/pp1.png'
// import p1 from '../img/p1.png'
import {pizzaData} from '../util/PizzaData'


function Main() {
  return (
    <div className='main_card_img'>
      <div className=' w-full grid grid-cols-3 h-full items-center justify-center pt-32  flex-wrap '>
        {pizzaData && pizzaData.map(n=>(
          <div key={n.id} className="  drop-shadow-lg mt-14  bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
            <img className='w-20 lg:w-40 -mt-10 lg:-mt-20 ' src={n.imgSrc} alt="p1" />
            <p>{n.name}</p>
            <p>{n.desp}</p>
            <p>{n.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main