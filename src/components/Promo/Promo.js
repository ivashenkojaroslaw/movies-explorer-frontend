import React from 'react';
import { Link } from "react-router-dom";
import './Promo.css';
import promoPicture from '../../images/pictures/promo.png'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__row promo__row_type_main-content">
        <div className="promo__wrapper promo__wrapper_type_text">
          <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className="promo__picture" src={promoPicture} alt="Вступительная картинка"/>
      </div>
      <div className="promo__row promo__row_type_links">
        <Link className="promo__link promo__link_type_learn-more" to="https://praktikum.yandex.ru" rel="noopener noreferrer" target="_blank">Узнать больше</Link>
      </div>
    </section>
  )
}

export default Promo