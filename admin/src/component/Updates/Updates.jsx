import React from 'react'
import { updatesData } from '../../Data/Data'
import './Updates.css'

const Updates = () => {
  return (
    <div className="Updates">
      {updatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="person" />
            <div className="notis">
              <div>
                <span>{update.name}</span>
                <span> {update.notis}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Updates