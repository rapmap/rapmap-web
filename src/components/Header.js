import React from 'react'
import Images from '../services/img.assets'
import Search from './Search';

const isBurgerVisible = rapperBurgerVisibility => 
rapperBurgerVisibility ? 'visible-close' : ''

const Header = ({ toggleListVisibility, rapperBurgerVisibility }) => (
  <header className="header">
    <div className="header__logo">
      <img src={Images.logo} alt="rapmap"/>
    </div>
    <div onClick={toggleListVisibility} className="header__burger">
      <img src={Images.burger} alt="burger"/>
    </div>
  </header>
)

export default Header