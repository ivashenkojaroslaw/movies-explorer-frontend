import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__row footer__row_type_body">
        <p className="footer__date">© 2020</p>
        <ul className="footer__nav-tabs">
          <li className="footer__nav-tab">
            <Link to="https://praktikum.yandex.ru" className="footer__nav-link" rel="noopener noreferrer" target="_blank">Яндекс.Практикум</Link>
          </li>
          <li className="footer__nav-tab">
            <Link to="https://github.com/ivashenkojaroslaw" className="footer__nav-link" rel="noopener noreferrer" target="_blank">Github</Link>
          </li>
          <li className="footer__nav-tab">
            <Link to="https://ru-ru.facebook.com/" className="footer__nav-link" rel="noopener noreferrer" target="_blank">Facebook</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer