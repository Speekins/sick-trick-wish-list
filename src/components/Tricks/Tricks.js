import React from 'react'
import Card from '../Card/Card'

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
    <p>Tricks!</p>
  )
}

export default Tricks