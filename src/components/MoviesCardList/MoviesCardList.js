import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import {data} from '../../utils/constants'


function MoviesCardList({isSavedMovies}) {

  return (
    <section className="movies-card-list">
      {
        data.map((item, index) => {
          return (<MoviesCard key={index} movie={item} isSavedMovies={isSavedMovies}/>)
        })
      }
      <button type="button" className={`movies-card-list__button ${isSavedMovies ? 'movies-card-list__button_hidden' : ''}`}>Еще</button>
    </section>
  )
}

export default MoviesCardList