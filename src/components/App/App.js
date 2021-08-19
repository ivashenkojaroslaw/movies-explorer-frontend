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

import moviesApi from '../../utils/Api/MoviesApi';


function App() {

  const [moviesList, setMoviesList] = React.useState([]);
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [tooltip, setToolTip] = React.useState({
    isErrorOpen: false,
    isSuccessOpen: false,
    message: ''
  })

  const handleErrors = (err) => {
    console.log(`Что-то пошло не так ${err}`)
  }

  const handleSuccessErrorToolTip = (message) => {
    setToolTip({
      isErrorOpen: false,
      isSuccessOpen: true,
      message: message
    })
  }

  const handleErrorToolTip = (message) => {
    setToolTip({
      isErrorOpen: true,
      isSuccessOpen: false,
      message: message
    })
  }
  
  const handleCloseToolTip = () => {
    setToolTip({
      isErrorOpen: false,
      isSuccessOpen: false,
      message: ''
    });
  }

  const searchMoviesList = (keyWord) => {
    setShowPreloader(true)
    moviesApi.getMovies()
      .then((data) => {
        if(data){
          const movies = findMovies(data, keyWord);
                
          if (movies.length > 0) {
            localStorage.setItem('movies', movies)
            setMoviesList(movies);
          }
          else {
            handleErrorToolTip('К сожалению, по вашему запросу ничего не найдено')
          }
        }
      })
      .catch(err => {
        handleErrorToolTip('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
      .finally(() => {
        setShowPreloader(false)
      })
  }

  function findMovies(arr, keyWord){
    const res = arr.filter(item => {
      if(item.description.toLowerCase().search(keyWord.toLowerCase()) > -1) return item
    })
    return res
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header isMain={true}/>
          <Main />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile name="Ярослав" email="help@help.com" />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/movies">
          <Header />
          <SearchForm handleClickBySubmit={searchMoviesList} /> 
          <Preloader isShow={showPreloader} /> 
          <MoviesCardList isSavedMovies={false}  movies={moviesList} />
          <Footer />
          
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SearchForm  /> 
          <MoviesCardList isSavedMovies={true}/>
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
