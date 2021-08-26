import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Header.css';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab'

function Header({ isLoggedIn, currentPath }) {
  const history = useHistory();
  const isShow = ((currentPath === '/saved-movies' || currentPath === '/movies' || currentPath === '/' || currentPath === '/profile') && history.location.pathname === currentPath) ? true : false;
  return (
    <header className={`header ${(currentPath === '/') ? '' : 'header_theme_dark'} ${isShow ? '': 'header_hidden' }`}>
      <Link className="header__logo" to="/">На главную</Link>
      {
        isLoggedIn ? 
        <Navigation currentPath={currentPath}/> : 
        <div className="header__tabs header__tabs_show">
          <NavTab><Link className="nav-tab__link nav-tab__link_type_signup" to="/signup">Регистрация</Link></NavTab>
          <NavTab><Link className="nav-tab__link nav-tab__link_type_signin" to="/signin">Войти</Link></NavTab>
        </div>
      }      
      
    </header>
  )
}

export default Header