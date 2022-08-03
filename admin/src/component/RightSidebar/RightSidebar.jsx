import React from 'react'
import CustReview from '../CustReview/CustReview'
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
        <CustReview/>
      </div>
    </div>
  )
}

export default RightSidebar