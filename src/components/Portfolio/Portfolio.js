import React from 'react';
import { Link } from "react-router-dom";
import './Portfolio.css';
import me from '../../images/pictures/me.jpg'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Студент</h2>
      <div className="portfolio__row portfolio__row_type_adout-me">
        <div className="portfolio__wrapper portfolio__wrapper_type_text">
          <p className="portfolio__text portfolio__text_type_name">Ярослав</p>
          <p className="portfolio__text portfolio__text_type_job">Фронтенд-разработчик, 27 лет</p>
          <p className="portfolio__text portfolio__text_type_describe">Я родился и живу в Москве, закончил факультет экономики МФТИ. У меня есть жена.
            Я люблю слушать музыку, а ещё увлекаюсь спортом. Недавно решил разобрать с front-end разработкой.</p>
          <ul className="portfolio__list portfolio__list_type_sosial-nets">
            <li className="portfolio__list-item portfolio__list-item_type_sosial-net">
              <Link className="portfolio__link portfolio__link_type_social-net" to="https://ru-ru.facebook.com/" rel="noopener noreferrer" target="_blank">Facebook</Link>
            </li>
            <li className="portfolio__list-item portfolio__list-item_type_sosial-net">
              <Link className="portfolio__link portfolio__link_type_social-net" to="https://github.com/ivashenkojaroslaw" rel="noopener noreferrer" target="_blank">Github</Link>
            </li>
          </ul>
        </div>
        <div className="portfolio__wrapper portfolio__wrapper_type_image">
          <img className="portfolio__image" src={me} alt="Моя фотография"></img>
        </div>
      </div>
      <p className="portfolio__subtitle">Портфолио</p>
      <div className="portfolio__row portfolio__row_type_projects">        
        <ul className="portfolio__list portfolio__list_type_projects">
          <li className="portfolio__list-item portfolio__list-item_type_project">
            <p className="portfolio__text portfolio__text_type_project-name">Статичный сайт</p>
            <Link className="portfolio__link portfolio__link_type_project" to="https://github.com/ivashenkojaroslaw/how-to-learn" rel="noopener noreferrer" target="_blank"> </Link>
          </li>
          <li className="portfolio__list-item portfolio__list-item_type_project">
            <p className="portfolio__text portfolio__text_type_project-name">Адаптивный сайт</p>
            <Link className="portfolio__link portfolio__link_type_project" to="https://github.com/ivashenkojaroslaw/russian-travel" rel="noopener noreferrer" target="_blank"> </Link>
          </li>
          <li className="portfolio__list-item portfolio__list-item_type_project">
            <p className="portfolio__text portfolio__text_type_project-name">Одностраничное приложение</p>
            <Link className="portfolio__link portfolio__link_type_project" to="https://github.com/ivashenkojaroslaw/react-mesto-api-full" rel="noopener noreferrer" target="_blank"> </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio