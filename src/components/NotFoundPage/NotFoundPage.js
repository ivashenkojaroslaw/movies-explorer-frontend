import React from 'react';
import { useHistory } from "react-router-dom";
import './NotFoundPage.css';

function NotFoundPage() {
  const history = useHistory();
  const handleClickByBack = () => history.goBack();
  
  return (
    <section className="not-found-page">
      <p className="not-found-page__error-number">404</p>
      <p className="not-found-page__sign">Страница не найдена</p>
      <button className="not-found-page__back" type="button" onClick={handleClickByBack}>Назад</button>
    </section>
  )
}

export default NotFoundPage