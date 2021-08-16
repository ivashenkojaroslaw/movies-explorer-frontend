import React from 'react';
import { Link } from "react-router-dom";
import './Profile.css';

function Profile({ name, email }) {
  return (
    <section className="profile">
      <div className="profile__window">
        <h1 className="profile__header">{`Привет, ${name}`}</h1>
        <form className="profile__form">
          <fieldset className='profile__fieldset'>
            <div className="profile__input-wrapper">
              <label htmlFor="name_edit" className="profile__label">Имя</label>
              <input id="name_edit" type='name' className="profile__input" defaultValue={name} required></input>
            </div>
            <div className="profile__input-wrapper">
              <label htmlFor="email_edit" className="profile__label">Email</label>
              <input id="email_edit" type='email' className="profile__input" defaultValue={email} required></input>
            </div>
          </fieldset>
          <button className="profile__button" type="button">Редактировать</button>
        </form>
        <Link className="profile__link" to="/sign-in">Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile