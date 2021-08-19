import React from 'react';
import './MoviesCard.css';
import { MoviesApi_URL } from '../../utils/constants';

function MoviesCard({movie, isSavedMovies}) {

  const [like, setLike] = React.useState(false);

  const handleClickByLike = () => setLike(!like);

  function renderTime(duration){
    const hour = Math.floor(Number(duration)/60);
    const minutes = Number(movie.duration)%60;
    if(hour===0) return `${minutes}м`
    else if (minutes === 0 ) return `${hour}ч`
    else return `${hour}ч ${minutes}м`
  }
  return (
    <div className="movies-card">
      <div className="movies-card__wrap movies-card__wrap_type_text">
        <p className="movies-card__header">{movie.nameRU}</p>
        <p className="movies-card__duration">{renderTime(movie.duration)}</p>
        <button type="button" className={`movies-card__like-button ${like ? 'movies-card__like-button_active' : ''} ${isSavedMovies ? 'movies-card__like-button_hidden' : ''}`} onClick={handleClickByLike}></button>
        <button type="button" className={`movies-card__remove-button ${isSavedMovies ? '' : 'movies-card__remove-button_hidden'}`} ></button>
      </div>
      <div className="movies-card__wrap movies-card__wrap_type_picture">
        <img className="movies-card__picture" src={`${MoviesApi_URL}${movie.image.url}`} alt={`Логотип фильма ${movie.nameRU}`}></img>
      </div>
    </div>
  )
}

export default MoviesCard