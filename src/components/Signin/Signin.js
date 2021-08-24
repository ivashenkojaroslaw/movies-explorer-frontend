import React from 'react';
import { Link } from "react-router-dom";
import './Signin.css';
import { useFormWithValidation } from "../../utils/Validator/Validator"


function Signin({ handleLogin }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleClickBySendData = () => {
    handleLogin(values)
    resetForm()
  }


  return (
    <section className="signin">
      <div className="signin__window">
        <Link className="signin__logo" to="/">На главную страницу</Link>
        <h1 className="signin__header">Рады видеть!</h1>
        <form className="signin__form">
          <fieldset className="signin__fieldset">
            <div className="signin__input-wrapper">
              <label htmlFor="signin-email" className="signin__label">Email</label>
              <input id="signin-email" type='email' className="signin__input" required name="email" value={values.email || ''} onChange={handleChange} autoComplete="username"></input>
              <span className="signin__error signin__error_type_email">{errors.email}</span>
            </div>
            <div className="signin__input-wrapper">
              <label htmlFor="signin-password" className="signin__label">Пароль</label>
              <input id="signin-password" type='password' className="signin__input" required minLength="8" name="password" value={values.password || ''} onChange={handleChange} autoComplete="current-password"></input>
              <span className="signin__error signin__error_type_password">{errors.password}</span>
            </div>
          </fieldset>
          <button type="button" className={`signin__button ${isValid ? '' : 'signin__button_invalid'}`} onClick={isValid ? handleClickBySendData : () => {}}>Войти</button>
        </form>
        <p className="signin__text">Еще не зарегистрированы? <Link className="signin__link" to="/signup">Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Signin