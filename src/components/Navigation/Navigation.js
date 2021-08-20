import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Navigation.css';


function Navigation() {

  const history = useHistory();
  const [showNavBar, setShowNavBar] = React.useState(false);

  const handleClickByShowNavBar = () => setShowNavBar(true);
  const handleClickByHideNavBar = () => setShowNavBar(false);

  function checkPath(neededPath){
    const currentPath = history.location.pathname;
    if (currentPath === neededPath) return true
    return false
  }

  return (
    <nav className="navigation navigation_show">
      <div className={`navigation__overlay ${showNavBar ? 'navigation__overlay_show' : ''}`}>      
        <div className="navigation__window">
          <div className="navigation__header"> 
            <button className="navigation__buttom navigation__buttom_type_close" type="button" onClick={handleClickByHideNavBar}></button>
          </div>
          <ul className="navigation__body"> 
            <li className="navigation__wrap navigation__wrap_hidden">
                <Link to="/" className={`navigation__tab navigation__tab_type_text ${checkPath('/')? 'navigation__tab_active' : ''}`}>Главная</Link>
            </li>
            <li className="navigation__wrap">
              <Link to="/movies" className={`navigation__tab navigation__tab_type_text ${checkPath('/movies')? 'navigation__tab_active' : ''}`}>Фильмы</Link>
            </li>
            <li className="navigation__wrap">
              <Link  to="/saved-movies" className={`navigation__tab navigation__tab_type_text ${checkPath('/saved-movies')? 'navigation__tab_active' : ''}`}>Сохраненные фильмы</Link>
            </li>
            <li className="navigation__wrap">
              <Link  to="/profile" className="navigation__tab navigation__tab_type_icon">Аккаунт<span className="navigation_icon navigation_icon_type_accaunt"></span></Link> 
            </li>                
          </ul>   
        </div>    
      </div>    
      <button className="navigation__buttom navigation__buttom_type_list" type="button" onClick={handleClickByShowNavBar}></button>  
    </nav>
  )
}

export default Navigation