import React from 'react'

const PopRapperInfo = (props) => (
  <div clasName="asiderapper">
    <ul>
      <li>
        <img src={props.img} alt={props.name}/>
        <h3>{props.name}</h3>
        <span>Related</span>
        <ul>
          <li>{props.related}</li>
        </ul>
        <span>Top song</span>
        <ul>
          <li>{props.songs}</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default PopRapperInfo