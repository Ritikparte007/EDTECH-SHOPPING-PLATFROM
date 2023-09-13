import React from 'react'
import './Supported.css'
import razorpay from './image/Screenshot (198).png'
import instamojo from './image/Screenshot (204).png'
import digitalocean from './image/Screenshot (203).png'
import godday from './image/Screenshot (202).png'
function Supported() {
  return (
    <div>
      <div className='Supporded'>
        <h1>Supported by</h1>
       <div>
       <div className='supportedplatfrom'>
          <img src={razorpay} alt="" />
          <img src={instamojo}alt="" />
          <img src={digitalocean}alt="" />
          <img src={godday}alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Supported
