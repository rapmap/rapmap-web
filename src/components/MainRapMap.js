import React from 'react'
import Images from '../services/img.assets'

const MainRapMap = () => (
  <div class="main__rap">
    <img src={Images.main} alt="mainrap"/>
    <div class="lds-roller">
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