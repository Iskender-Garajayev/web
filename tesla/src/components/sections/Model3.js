import React from 'react'
import tr3 from '../../img/tr3.png'
import './Model3.css'

function Model3() {
  return (
    <div className='model3'>
      <h2>Model 3</h2>
      <p>Order Oline for <a href="http://" target="_blank" rel="noopener noreferrer">Touchless Delivery</a></p>
      <img src={tr3} alt="Tesla" />
      <div className='btn'>
        <button type="submit">custem order</button>
        <button type="submit">existing investory</button>
      </div>
    </div>
  )
}

export default Model3