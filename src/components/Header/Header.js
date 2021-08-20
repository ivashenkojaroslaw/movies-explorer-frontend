import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab'

function Header({isMain, isLoggedIn }) {
  return (
    <header className={`header ${isMain ? '' : 'header_theme_dark'}`}>
      <Link className="header__logo" to="/">На главную</Link>
      {
        isLoggedIn ? 
        <Navigation /> : 
        <div className="header__tabs header__tabs_show">
          <NavTab><Link className="nav-tab__link nav-tab__link_type_signup" to="/signup">Регистрация</Link></NavTab>
          <NavTab><Link className="nav-tab__link nav-tab__link_type_signin" to="/signin">Войти</Link></NavTab>
        </div>
      }      
      
    </header>
  )
}

export default Header