import React from 'react'
import { Link } from 'react-router-dom'
import references from './references.json'

const ReferenceSlider = () => {
  return (
    <div className="slider">
      {references.map((reference) => (
        <div key={reference.id} className="slide">
          <Link to={reference.link}>
            <img src={reference.image} alt={reference.title} />
            <h3>{reference.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ReferenceSlider
