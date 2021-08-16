import React from 'react';
import './MoviesCard.css';


function MoviesCard({movie, isSavedMovies}) {

  const [like, setLike] = React.useState(false);

  const handleClickByLike = () => setLike(!like);

  return (
    <div className="movies-card">
      <div className="movies-card__wrap movies-card__wrap_type_text">
        <p className="movies-card__header">{movie.nameRU}</p>
        <p className="movies-card__duration">{`${Math.floor(Number(movie.duration)/60)}ч ${Number(movie.duration)%60}м`}</p>
        <button type="button" className={`movies-card__like-button ${like ? 'movies-card__like-button_active' : ''} ${isSavedMovies ? 'movies-card__like-button_hidden' : ''}`} onClick={handleClickByLike}></button>
        <button type="button" className={`movies-card__remove-button ${isSavedMovies ? '' : 'movies-card__remove-button_hidden'}`} ></button>
      </div>
      <div className="movies-card__wrap movies-card__wrap_type_picture">
        <img className="movies-card__picture" src={movie.photo} alt={`Логотип фильма ${movie.nameRU}`}></img>
      </div>
    </div>
  )
}

export default MoviesCard