import React from 'react'
import Card from '../Card/Card'
import './Tricks.css'

const Tricks = ({ tricks }) => {
  const allTricks = tricks.map(trick =>
    <Card
      stance={trick.stance}
      name={trick.name}
      obstacle={trick.obstacle}
      tutorial={trick.tutorial}
      key={trick.id}
    />)

  return (
    <div className='tricks-container'>
      {allTricks}
    </div>
  )
}

export default Tricks