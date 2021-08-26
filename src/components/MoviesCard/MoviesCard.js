import React from 'react';
import './MoviesCard.css';
import { MOVIES_API_URL } from '../../utils/constants';

function MoviesCard({ movie, isSavedMovies, handleSave, handleRemove, isLiked }) {

  const [like, setLike] = React.useState(isLiked);


  const likeCard = () => {
    handleSave(movie);
    setLike(true);
  }

  const dislikeCard = () => {
    handleRemove(movie);
    setLike(false);
  }

  const removeMovie = () => {
    handleRemove(movie)
  }

  
  function renderTime(duration) {
    const hour = Math.floor(Number(duration) / 60);
    const minutes = Number(movie.duration) % 60;
    if (hour === 0) return `${minutes}м`
    else if (minutes === 0) return `${hour}ч`
    else return `${hour}ч ${minutes}м`
  }


  return (
      <div className="movies-card">
        <div className="movies-card__wrap movies-card__wrap_type_text">
          <p className="movies-card__header">{movie.nameRU}</p>
          <p className="movies-card__duration">{renderTime(movie.duration)}</p>
          <button
            type="button"
            className={`movies-card__like-button ${like ? 'movies-card__like-button_active' : ''} ${isSavedMovies ? 'movies-card__like-button_hidden' : ''}`}
            onClick={like ? dislikeCard : likeCard}
          ></button>
          <button 
            type="button" 
            className={`movies-card__remove-button ${isSavedMovies ? '' : 'movies-card__remove-button_hidden'}`}
            onClick={removeMovie}
          ></button>
        </div>
        <div className="movies-card__wrap movies-card__wrap_type_picture">
          <img className="movies-card__picture" src={`${isSavedMovies ? movie.image : `${MOVIES_API_URL}${movie.image.url}`}`} alt={`Логотип фильма ${movie.nameRU}`}></img>
          <a href={movie.trailer} className='movies-card__link' rel="noopener noreferrer" target="_blank"> </a>
        </div>        
      </div>
  )
}

export default MoviesCard