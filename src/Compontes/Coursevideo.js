import React from 'react'
import './Coursevideo.css'
import Header from './Header'
import Sidebar from './Sidebar'
import videoshows from './video/IMAGINE FOR 1 MINUTE.mp4'

function Coursevideo() {
  return (
    <div className='videos-12'>
        {/* <Header></Header> */}
      <div className='video-1'>
        <video src={videoshows} controls></video>
        <h2>Digital full course marketing</h2>
      </div>
      
    </div>
  )
}   

export default Coursevideo
