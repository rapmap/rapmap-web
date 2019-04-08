import React from 'react'
import Images from '../services/img.assets'

const RapperCard = ({imageURL, name,}) => (
  <li>
    <h2>{name}</h2>
    <div>
      <img src={imageURL || Images.defaultrapper} alt={name} /> 
    </div>
    {/* <p>{location}</p> */}
  </li>
)

export default RapperCard