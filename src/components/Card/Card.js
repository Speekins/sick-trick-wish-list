import React from 'react'
import './Card.css'

const Card = ({ stance, name, obstacle, tutorial, id }) => {
  return (
    <div className='card'>
      <h3>{stance} {name}</h3>
      <h4>Obstacle: {obstacle}</h4>
      <a href={tutorial}>Check out the tutorial!</a>
    </div>
  )
}

export default Card