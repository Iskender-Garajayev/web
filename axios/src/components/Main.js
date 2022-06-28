import React from 'react'
import './Main.css'
// import pp1 from '../img/pp1.png'
// import p1 from '../img/p1.png'
import {pizzaData} from '../util/PizzaData'


function Main() {
  return (
    <div className='main_card_img'>
      <div className='main_img'>
        {pizzaData && pizzaData.map(n=>(
          <div key={n.id} className="card">
            <img className='card_img' src={n.imgSrc} alt="p1" />
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