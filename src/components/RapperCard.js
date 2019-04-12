import React from 'react'
import Images from '../services/img.assets'

const RapperCard = ({imageURL, name, artistWikiHref}) => (
  <li>
    <h2>{name}</h2>
    <div>
      <img src={imageURL || Images.defaultrapper} alt={name} /> 
    </div>
    <p className="info"><a href={`https://en.wikipedia.org/wiki/${artistWikiHref}`} target="_blank">+ info...</a></p>
    {/* <p>{city}</p> */}
  </li>
)

export default RapperCard