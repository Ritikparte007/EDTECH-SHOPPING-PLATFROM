import React from 'react'
import './Game.css'
import image from './image/Screenshot (187).png'

function Game() {
  return (
    <div>
      <div className='game' style={{display:"flex",justifyContent:"center"}}>
        <div>
        <h1 style={{color:""}}>Game Tournaments</h1><br />
        <img src={image} alt="" />
        <div className='btngame' >
            <a  href="">Learn more</a>
        </div>
        </div>
  
      </div>
    </div>
  )
}

export default Game
