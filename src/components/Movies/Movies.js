import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as finder from '../../utils/MoviesFilter';

function Movies({handleClickBySubmit,isShowPreloader, currentPath, moviesList, savedMoviesList, handleSave, handleRemove, handleShowPeloader, handleHidePreloader, handleShowFailToolTip }) {

  const [findedMovies, setFindedMovies] = React.useState([]);

  const searchMovies = (keyWord) => {
    handleShowPeloader();
    const movies = finder.searchMovies(moviesList, keyWord);
    if (movies.length > 0) {  
      setFindedMovies(movies);
    }
    else {
      handleShowFailToolTip('К сожалению, по вашему запросу ничего не найдено')          
    }
    handleHidePreloader();   
  }

  const filterMovies = (keyWord, isIncludeShortFilm) => {
    handleShowPeloader();
    let movies = finder.searchMovies(moviesList, keyWord);
    movies = finder.filterMovies(movies, isIncludeShortFilm);  
    if (movies.length > 0) {        
      setFindedMovies(movies);
    }
    else {
      handleShowFailToolTip('К сожалению, по вашему запросу ничего не найдено')          
    }
    handleHidePreloader(); 
  }
  
  return (
    <>
      <SearchForm handleClickBySubmit={handleClickBySubmit} searchMovies={searchMovies} filterMovies={filterMovies} />
      <Preloader isShow={isShowPreloader} />
      <MoviesCardList currentPath={currentPath} movies={findedMovies} savedMovies={savedMoviesList} handleSave={handleSave} handleRemove={handleRemove} />            
    </>
  )
}

export default Movies