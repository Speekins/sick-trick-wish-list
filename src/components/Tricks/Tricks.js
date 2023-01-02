import React from 'react'
import Card from '../Card/Card'
import './Tricks.css'

const Tricks = ({ tricks, removeTrick }) => {
  const allTricks = tricks.map(trick =>
    <Card
      stance={trick.stance}
      name={trick.name}
      obstacle={trick.obstacle}
      tutorial={trick.tutorial}
      removeTrick={removeTrick}
      id={trick.id}
      key={trick.id}
    />)

  return (
    <div className='tricks-container'>
      {allTricks}
    </div>
  )
}

export default Tricks