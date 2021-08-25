import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { NUMBER_SHOWED_MOVIES } from '../../utils/constants';


function MoviesCardList({ currentPath, movies, savedMovies, handleSave, handleRemove }) {


  const [countShowedMovies, setCountShowedMovies] = React.useState(NUMBER_SHOWED_MOVIES);
 
  const isSavedMovies = (currentPath === '/saved-movies') ? true : false;
  const handleClickByFurther = () => {
    setCountShowedMovies(countShowedMovies + NUMBER_SHOWED_MOVIES)
  }


  return (
    <section className="movies-card-list">
      {

        movies.map((item, index, array) => {
          if (index < countShowedMovies) {
            let isLiked = false
            if (savedMovies) {
              isLiked = savedMovies.some(movie => {
                if (movie.movieId === item.id) item._id = movie._id;
                return movie.movieId === item.id
              });
            }
            return (
              <MoviesCard
                key={item._id || item.id}
                movie={item}
                isSavedMovies={isSavedMovies}
                handleSave={handleSave}
                handleRemove={handleRemove}
                isLiked={isLiked}
              />)
          }
        })
      }
      <button
        type="button"
        className={`movies-card-list__button ${(movies.length <= countShowedMovies) ? 'movies-card-list__button_hidden' : ''}`}
        onClick={handleClickByFurther}
      >Еще</button>
    </section>
  )
}

export default MoviesCardList