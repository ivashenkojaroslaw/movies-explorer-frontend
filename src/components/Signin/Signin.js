import React from 'react';
import { Link } from "react-router-dom";
import './Signin.css';

function Signin() {
  return (
    <section className="signin">
      <div className="signin__window">
        <Link className="signin__logo" to="/">На главную страницу</Link>
        <h1 className="signin__header">Рады видеть!</h1>
        <form className="signin__form">
          <fieldset className="signin__fieldset">
            <div className="signin__input-wrapper">
              <label htmlFor="signin-email" className="signin__label">Email</label>
              <input id="signin-email" type='email' className="signin__input" required></input>
            </div>
            <div className="signin__input-wrapper">
              <label htmlFor="signin-password" className="signin__label">Пароль</label>
              <input id="signin-password" type='password' className="signin__input" required></input>
            </div>
            <span className="signup__form-error">Что-то пошло не так...</span>
          </fieldset>
          <button type="button" className="signin__button">Войти</button>
        </form>
        <p className="signin__text">Еще не зарегистрированы? <Link className="signin__link" to="/signup">Войти</Link></p>
      </div>
    </section>
  )
}

export default Signin