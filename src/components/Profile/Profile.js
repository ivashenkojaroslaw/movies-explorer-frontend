import React from 'react';
import { Link } from "react-router-dom";
import './Profile.css';
import { useFormWithValidation } from "../../utils/Validator/Validator";
import { namePattern } from "../../utils/regExp";
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ setCurrentUserData, handleUpdate }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const handleClickBySendData = () => {   
    handleUpdate(values);
  }

  function signOut(){
    localStorage.removeItem('token');
    setCurrentUserData({email:'', name: ''})    
  }

  React.useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  },[])

  const isActiveButton = (isValid && (values.name !== currentUser.name || values.email !== currentUser.email)) ? true : false;

  return (
    <section className="profile">
      <div className="profile__window">
        <h1 className="profile__header">{`Привет, ${currentUser.name}`}</h1>
        <form className="profile__form">
          <fieldset className='profile__fieldset'>
            <div className="profile__input-wrapper">
              <label htmlFor="name_edit" className="profile__label">Имя</label>
              <input id="name_edit" type='name' className="profile__input" name="name" value={values.name || currentUser.name} required onChange={handleChange} pattern={namePattern}></input>
              <span className="profile__error signin_profile__error_type_name">{errors.name}</span>
            </div>
            <div className="profile__input-wrapper">
              <label htmlFor="email_edit" className="profile__label">Email</label>
              <input id="email_edit" type='email' className="profile__input" name="email" value={values.email || currentUser.email} required onChange={handleChange}></input>
              <span className="profile__error profile__error_type_email">{errors.email}</span>
            </div>
          </fieldset>
          <button 
            className={`profile__button ${isActiveButton? '' : 'profile__button_invalid'}`} 
            onClick={isActiveButton ? handleClickBySendData : () => {} }
            type="button"
          >Редактировать</button>
        </form>
        <Link className="profile__link" to="/signin" onClick={signOut}>Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile