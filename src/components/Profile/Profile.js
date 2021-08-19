import React from 'react';
import { Link } from "react-router-dom";
import './Profile.css';
import { useFormWithValidation } from "../../utils/Validator/Validator";
import { namePattern } from "../../utils/regExp";

function Profile({ name, email }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleClickBySendData = () => {
    console.log(values)
    resetForm()
  }

  React.useEffect(() => {
    values.name = name;
    values.email = email;
  },[])


  return (
    <section className="profile">
      <div className="profile__window">
        <h1 className="profile__header">{`Привет, ${name}`}</h1>
        <form className="profile__form">
          <fieldset className='profile__fieldset'>
            <div className="profile__input-wrapper">
              <label htmlFor="name_edit" className="profile__label">Имя</label>
              <input id="name_edit" type='name' className="profile__input" name="name" value={values.name|| ''} required onChange={handleChange} pattern={namePattern}></input>
              <span className="profile__error signin_profile__error_type_name">{errors.email}</span>
            </div>
            <div className="profile__input-wrapper">
              <label htmlFor="email_edit" className="profile__label">Email</label>
              <input id="email_edit" type='email' className="profile__input" name="email" value={values.email || ''} required onChange={handleChange}></input>
              <span className="profile__error profile__error_type_email">{errors.email}</span>
            </div>
          </fieldset>
          <button 
            className={`profile__button ${(isValid && (values.name !== name || values.email !== email)) ? '' : 'profile__button_invalid'}`} 
            onClick={isValid && (values.name !== name || values.email !== email) ? handleClickBySendData : () => {} }
            type="button"
          >Редактировать</button>
        </form>
        <Link className="profile__link" to="/sign-in">Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile