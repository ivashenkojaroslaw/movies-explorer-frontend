import React from 'react';
import { Link } from "react-router-dom";
import './Signup.css';

function Signup() {
  return (
    <section className="signup">
      <div className="signup__window">
        <Link className="signup__logo" to="/">На главную страницу</Link>
        <h1 className="signup__header">Добро пожаловать!</h1>
        <form className="signup__form">
          <fieldset className="signup__fieldset">
            <div className="signup__input-wrapper">
              <label htmlFor="signup-name" className="signup__label">Имя</label>
              <input id="signup-name" type='text' className="signup__input" required ></input>
            </div>
            <div className="signup__input-wrapper">
              <label htmlFor="signup-email" className="signup__label">Email</label>
              <input id="signup-email" type='email' className="signup__input" required></input>
            </div>
            <div className="signup__input-wrapper">
              <label htmlFor="signup-password" className="signup__label">Пароль</label>
              <input id="signup-password" type='password' className="signup__input" required></input>
            </div>
            <span className="signup__form-error">Что-то пошло не так...</span>
          </fieldset>
          <button type="button" className="signup__button">Зарегистрироваться</button>
        </form>
        <p className="signup__text">Уже зарегистрированы? <Link className="signup__link" to="/signin">Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Signup