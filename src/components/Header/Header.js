import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab'

function Header({isMain}) {
  return (
    <header className={`header ${isMain ? '' : 'header_theme_dark'}`}>
      <Link className="header__logo" to="/">На главную</Link>
      {
        isMain ? <> </> : <Navigation />
      }      
      <div className="header__tabs">
        <NavTab><Link className="nav-tab__link nav-tab__link_type_signup" to="/signup">Регистрация</Link></NavTab>
        <NavTab><Link className="nav-tab__link nav-tab__link_type_signin" to="/signin">Войти</Link></NavTab>
      </div>
    </header>
  )
}

export default Header