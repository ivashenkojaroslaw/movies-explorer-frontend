import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({isSavedMovies, movies}) {

  const [countShowedMovies, setCountShowedMovies] = React.useState(5);

  const handleClickByFurther = () => {
    setCountShowedMovies(countShowedMovies+5)
  }

  return (
    <section className="movies-card-list">
      {
        movies.map((item, index) => {
          if (index < countShowedMovies) return (<MoviesCard key={index} movie={item} isSavedMovies={isSavedMovies}/>)
        })
      }
      <button 
        type="button" 
        className={`movies-card-list__button ${(isSavedMovies || movies.length <= countShowedMovies) ? 'movies-card-list__button_hidden' : ''}`}
        onClick={handleClickByFurther}
      >Еще</button>
    </section>
  )
}

export default MoviesCardList