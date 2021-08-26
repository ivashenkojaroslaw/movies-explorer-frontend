import React from 'react';
import { Link } from "react-router-dom";
import './Signup.css';
import { useFormWithValidation } from "../../utils/Validator/Validator"
import { namePattern } from "../../utils/regExp"

function Signup({ handleRegister }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleClickBySendData = () => {
    handleRegister(values)
    resetForm();
  }

  return (
    <section className="signup">
      <div className="signup__window">
        <Link className="signup__logo" to="/">На главную страницу</Link>
        <h1 className="signup__header">Добро пожаловать!</h1>
        <form className="signup__form">
          <fieldset className="signup__fieldset">
            <div className="signup__input-wrapper">
              <label htmlFor="signup-name" className="signup__label">Имя</label>
              <input id="signup-name" type='text' className="signup__input" required name="name" minLength="4" pattern={namePattern} value={values.name || ''} onChange={handleChange}></input>
              <span className="signup__error signup__error_type_name">{errors.name}</span>
            </div>
            <div className="signup__input-wrapper">
              <label htmlFor="signup-email" className="signup__label">Email</label>
              <input id="signup-email" type='email' className="signup__input" required name="email" value={values.email || ''} onChange={handleChange}></input>
              <span className="signup__error signup__error_type_email">{errors.email}</span>
            </div>
            <div className="signup__input-wrapper">
              <label htmlFor="signup-password" className="signup__label">Пароль</label>
              <input id="signup-password" type='password' className="signup__input" required minLength="8" name="password" value={values.password || ''} onChange={handleChange}></input>
              <span className="signup__error signup__error_type_password">{errors.password}</span>
            </div>
          </fieldset>
          <button type="button" className={`signup__button ${isValid ? '' : 'signup__button_invalid'}`} onClick={isValid ? handleClickBySendData : () => {}}>Зарегистрироваться</button>
        </form>
        <p className="signup__text">Уже зарегистрированы? <Link className="signup__link" to="/signin">Войти</Link></p>
      </div>
    </section>
  )
}

export default Signup