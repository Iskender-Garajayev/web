import React from 'react'
import Updates from '../Updates/Updates'
import './RightSidebar.css'

const RightSidebar = () => {
  return (
    <div className="RightSidebar">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
      </div>
    </div>
  )
}

export default RightSidebar