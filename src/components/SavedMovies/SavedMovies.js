import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as finder from '../../utils/MoviesFilter';

function SavedMovies({ currentPath, isShowPreloader, savedMoviesList, handleRemove, handleShowPeloader, handleHidePreloader, handleShowFailToolTip }) {
  
  const [findedMovies, setFindedMovies] = React.useState([]);
  
  const searchSavedMovies = (keyWord, isIncludeShortFilm) => {
    handleShowPeloader();
    const movies = finder.searchMovies(savedMoviesList, keyWord, isIncludeShortFilm);
    if (movies.length > 0) {
      setFindedMovies(movies)
    }
    else {
      handleShowFailToolTip('К сожалению, по вашему запросу ничего не найдено');      
    }
    handleHidePreloader();
  }

  const filterMovies = (keyWord, isIncludeShortFilm) => {
    handleShowPeloader();
    const movies = finder.searchMovies(savedMoviesList, keyWord, isIncludeShortFilm);
    if (movies.length > 0) {      
      setFindedMovies(movies)
    }
    else {
      handleShowFailToolTip('К сожалению, по вашему запросу ничего не найдено');      
    }
    handleHidePreloader()
  }

  React.useEffect(() => {
    setFindedMovies(savedMoviesList);
  },[savedMoviesList])
  
  return (
    <>
      <SearchForm searchMovies={searchSavedMovies} filterMovies={filterMovies}/>
      <Preloader isShow={isShowPreloader} />
      <MoviesCardList currentPath={currentPath} movies={findedMovies} handleRemove={handleRemove} />           
    </>
  )
}

export default SavedMovies