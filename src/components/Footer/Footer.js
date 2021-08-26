import React from 'react';
import { useHistory } from "react-router-dom";
import './Footer.css';

function Footer({ currentPath }) {
  const history = useHistory();
  const isShow = ((currentPath === '/saved-movies' || currentPath === '/movies' || currentPath === '/') && history.location.pathname === currentPath) ? true : false;
  return (
    <footer className={`footer ${isShow ? '' : 'footer_hidden'}`}>
      <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__row footer__row_type_body">
        <p className="footer__date">© 2020</p>
        <ul className="footer__nav-tabs">
          <li className="footer__nav-tab">
            <a href="https://praktikum.yandex.ru" className="footer__nav-link" rel="noopener noreferrer" target="_blank">Яндекс.Практикум</a>
          </li>
          <li className="footer__nav-tab">
            <a href="https://github.com/ivashenkojaroslaw" className="footer__nav-link" rel="noopener noreferrer" target="_blank">Github</a>
          </li>
          <li className="footer__nav-tab">
            <a href="https://ru-ru.facebook.com/" className="footer__nav-link" rel="noopener noreferrer" target="_blank">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer