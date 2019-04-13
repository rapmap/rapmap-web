import React from 'react'
import Images from '../services/img.assets'

const MainRapMap = () => (
  <div className="main__rap">
    <img src={Images.main} alt="mainrap"/>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default MainRapMap