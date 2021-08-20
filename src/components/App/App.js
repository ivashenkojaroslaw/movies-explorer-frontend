import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Tooltip from '../Tooltip/Tooltip';


import { MoviesApi_URL } from '../../utils/constants';
import moviesApi from '../../utils/Api/MoviesApi';
import mainApi from '../../utils/Api/MainApi';

function App() {

  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [tooltip, setToolTip] = React.useState({
    isOpen: false,
    isErrorOpen: false,
    isSuccessOpen: false,
    isFailOpen: false,
    message: ''
  })
  const [loggedIn, setLoggedIn] = React.useState(true);

  const handleErrors = (err) => {
    console.log(`Что-то пошло не так ${err}`);    
  }

  const handleShowSuccessErrorToolTip = (message) => {
    setToolTip({
      isOpen: true,    
      isSuccessOpen: true,
      message: message
    })
  }

  const handleShowErrorToolTip = (message) => {
    setToolTip({
      isOpen: true,
      isErrorOpen: true,
      message: message
    })
  }

  const handleShowFailToolTip = (message) => {
    setToolTip({
      isOpen: true,      
      isFailOpen: true,
      message: message
    })
  }
  
  const handleCloseToolTip = () => {
    setToolTip({
      isOpen: false,
      isErrorOpen: false,
      isSuccessOpen: false,
      isFailOpen: false,
      message: ''
    });
  }

  const searchMovies = (keyWord, isIncludeShortMovie) => {
    setShowPreloader(true);
    moviesApi.getMovies()
      .then((data) => {
        if(data){
          const movies = findMovies(data, keyWord, isIncludeShortMovie);
                
          if (movies.length > 0) {
            localStorage.setItem('movies', movies)
            setMoviesList(movies);
          }
          else {
            handleShowFailToolTip('К сожалению, по вашему запросу ничего не найдено')
          }
        }
      })
      .catch(err => {
        handleShowErrorToolTip('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
      .finally(() => {
        setShowPreloader(false)
      })
  }

  const searchSavedMovies = (keyWord, isIncludeShortMovie) => {
    
    setShowPreloader(true);
    mainApi.getMovies()
      .then(data => {
        const movies = findMovies(data.data, keyWord, isIncludeShortMovie);
        if (movies.length > 0) {
          setSavedMoviesList(movies)
        }
        else {
          handleShowFailToolTip('К сожалению, по вашему запросу ничего не найдено')
        }
        
      })
      .catch(err => {
        handleShowErrorToolTip('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
      .finally(() => {
        setShowPreloader(false)
      })
      
  }

  function findMovies(arr, keyWord, isIncludeShortMovie){
    const res = arr.filter(item => {
      if(item.description.toLowerCase().search(keyWord.toLowerCase()) > -1){
        if(!isIncludeShortMovie && item.duration >= 40) return item 
        else if (isIncludeShortMovie) return item
      } 
    })
    return res
  }

  function saveMovie(movie){
    mainApi.saveMovie({...movie, image: `${MoviesApi_URL}${movie.image.url}`,
                      trailer: movie.trailerLink, 
                      thumbnail: `${MoviesApi_URL}${movie.image.formats.thumbnail.url}`,
                      movieId: movie.id                              
                    })
    .then(data => {
      savedMoviesList.push(data.data) 
      setSavedMoviesList([...savedMoviesList]);
      return Promise.resolve(true)
    })
    .catch(handleErrors);
  };

  function removeMovie(movie){
    mainApi.removeMovie(movie._id)
    .then(() => {
      const data = savedMoviesList.filter(item => { return item._id !==  movie._id })
      setSavedMoviesList(data);
      return Promise.resolve(true)
    })
    .catch(handleErrors)
  }

  function updateSavedMovies(){
    mainApi.getMovies()
    .then(movies => {
      setSavedMoviesList(movies.data);
    })
    .catch(handleErrors);
  }

  React.useEffect(() => {
    updateSavedMovies()
  },[])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header isMain={true} isLoggedIn={loggedIn} />
          <Main />
        </Route>
        <Route path='/profile'>
          <Header isLoggedIn={loggedIn} />
          <Profile name="Ярослав" email="help@help.com" />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/movies">
          <Header isLoggedIn={loggedIn} />
          <SearchForm handleClickBySubmit={searchMovies} /> 
          <Preloader isShow={showPreloader} /> 
          <MoviesCardList isSavedMovies={false}  movies={moviesList} savedMovies={savedMoviesList} handleSave={saveMovie} handleRemove={removeMovie}/>
          <Footer />
          
        </Route>
        <Route path="/saved-movies">
          <Header isLoggedIn={loggedIn} />
          <SearchForm  handleClickBySubmit={searchSavedMovies} /> 
          <MoviesCardList isSavedMovies={true} movies={savedMoviesList} handleRemove={removeMovie} handleUpdateMovies={updateSavedMovies}/>
          <Footer />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
    <Tooltip tooltip={tooltip} onClose={handleCloseToolTip}/>
    </div>
  );
}

export default App;
