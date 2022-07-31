import React, { useState } from 'react'
import './Card.css'
import { AnimateSharedLayout } from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { IoCloseOutline } from 'react-icons/io5'

const Card = (props) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
      {
        expanded ?
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} /> :
          <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      }
    </AnimateSharedLayout>
  )
}


//compact card

function CompactCard({ param, setExpended }) {
  const Png = param.png;
  return (
    <div className="CompactCard"
      style={
        {
          background: param.color.backGround,
          boxShadow: param.color.boxShadow
        }
      }
      onClick={setExpended}
    >

      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}

function ExpandedCard({ param, setExpanded }) {
  return (
    <div className="ExpandedCard"
      style={
        {
          background: param.color.backGround,
          boxShadow: param.color.boxShadow
        }
      }
    >
      <div>
        <IoCloseOutline onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chardContainer">
        chard
      </div>
      <span>Last 24 hours</span>
    </div>
  )
}



export default Card