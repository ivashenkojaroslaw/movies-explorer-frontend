import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';

import Tooltip from '../Tooltip/Tooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import { MoviesApi_URL } from '../../utils/constants';
import moviesApi from '../../utils/Api/MoviesApi';
import mainApi from '../../utils/Api/MainApi';
import * as auth from '../../utils/auth';

function App() {

  const history = useHistory();
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

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [currentUserData, setCurrentUserData] =
    React.useState({
      name: '',
      email: ''
    })
  const [currentPath, setCurrentPath] = React.useState('/');

  const handleErrors = (err) => {
    console.log(`Что-то пошло не так ${err}`);
  }

  function handleLogin() {
    setLoggedIn(true)
  }

  function handleCheckToken() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.checkToken(token)
        .then(data => {
          handleLogin();          
          const userData = {
            email: data.data.email, name: data.data.name
          }
          setCurrentUserData({ ...currentUserData, ...userData });
          //history.push('/movies');
          history.goBack();
        })
        .catch(handleErrors);
    }
  }

  function getCurrentUserData(){
    const token = localStorage.getItem('token');
    if (token) {
      auth.checkToken(token)
        .then(data => {    
          const userData = {
            email: data.data.email, name: data.data.name
          }
          setCurrentUserData({ ...currentUserData, ...userData })
        })
        .catch(handleErrors);
    }
  }

  const handleLoginSubmit = (userData) => {
    const { email, password } = userData;
    if (email && password) {
      auth.authorize(email, password)
        .then(data => {
          if (data.token) {
            localStorage.setItem('token', data.token); 
            mainApi.setToken(data.token);        
            handleLogin();          
            history.push('/movies')
          }
        })
        .catch(err => {
          handleShowErrorToolTip('Ошибка авторизации, попробуйте снова');
          console.log(`Что-то пошло не так ${err}`)
        })
    }
    else {
      console.log('Введите данные')
      return
    }
  }

  const handleRegisterSubmit = (data) => {

    const { email, name, password } = data;
    if (email && password && name) {
      auth.register(email, name, password)
        .then((res) => {
          console.log(res)          
          handleShowSuccessErrorToolTip('Поздравляем! Вы успешно зарегистрировались.')
          history.push('/signin');
        })
        .catch(err => {
          handleShowErrorToolTip('Ошибка при регистрации. Возможно, указанный вами email уже зарегистрирован.')
          console.log(`Что-то пошло не так ${err}`)
        })
    }
    else {
      console.log('Введите данные')
      return
    }
  }

  const handleUpdateUserData = (data) => {
    const { email, name } = data;
    if (name && email){
      mainApi.updateUserData(name, email)
        .then(data => {
          setCurrentUserData(data.data);
          handleShowSuccessErrorToolTip('Вы успешно изменили данные!')
        })
        .catch(handleErrors)
    }
    else{
      handleShowSuccessErrorToolTip('Заполните форму!');
    }    
  }

  React.useEffect(() => {
    handleCheckToken();    
    const pathListener = history.listen((location, action) => {
      setCurrentPath(location.pathname);        
    });
    
  }, []);

  React.useEffect(() => {
    getCurrentUserData(); 
    getSavedMovies(); 
    const movies = localStorage.getItem('movies');
    if(movies){
      setMoviesList(JSON.parse(movies));
    }else{
      getMovies();
    }    
  }, [loggedIn]);



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

  const handleShowPeloader = () => {
    setShowPreloader(true);
  }

  const handleHidePreloader = () => {
    setShowPreloader(false);
  }
  


  function saveMovie(movie) {
    mainApi.saveMovie({
      ...movie, image: `${MoviesApi_URL}${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `${MoviesApi_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id
    })
      .then(data => {
        savedMoviesList.push(data.data)
        setSavedMoviesList([...savedMoviesList]);
      })
      .catch(handleErrors);
  };

  function removeMovie(movie) {
    mainApi.removeMovie(movie._id)
      .then(() => {
        const data = savedMoviesList.filter(item => { return item._id !== movie._id })
        setSavedMoviesList(data);
      })
      .catch(handleErrors)
  }

  function getMovies() {
    handleShowPeloader()
    moviesApi.getMovies()
      .then((data) => {
        setMoviesList(data);
        localStorage.setItem('movies', JSON.stringify(data));
      })
      .catch(err => {
        console.log(`ERROR - ${err}`)
        handleShowErrorToolTip('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
      .finally(() => {
        handleHidePreloader()
      })
  }

  function getSavedMovies() {
    mainApi.getMovies()
      .then(movies => {
        setSavedMoviesList(movies.data);
      })
      .catch(handleErrors);
  }

  return (
    <CurrentUserContext.Provider value={currentUserData}>
      <div className="app">
        <Header isLoggedIn={loggedIn} currentPath={currentPath} />

        <Switch>          
          <Route exact path="/">            
            <Main />
          </Route>

          <Route path='/signin'>
            <Signin handleLogin={handleLoginSubmit} />
          </Route>
          <Route path="/signup">
            <Signup handleRegister={handleRegisterSubmit} />
          </Route>

          <ProtectedRoute 
            path='/profile'                            
            loggedIn={loggedIn}
            handleUpdate={handleUpdateUserData}
            setCurrentUserData={setCurrentUserData}
            component = {Profile}
          />

          <ProtectedRoute 
            path='/movies'                            
            loggedIn={loggedIn}
            //handleClickBySubmit={searchMovies} 
            isShowPreloader={showPreloader} 
            currentPath={currentPath} 
            moviesList={moviesList} 
            savedMoviesList={savedMoviesList} 
            handleSave={saveMovie} 
            handleRemove={removeMovie}    
            handleShowPeloader={handleShowPeloader}    
            handleHidePreloader={handleHidePreloader}
            handleShowFailToolTip={handleShowFailToolTip}    
              
            component = {Movies}
          />

          <ProtectedRoute 
            path='/saved-movies'                            
            loggedIn={loggedIn}
            //handleClickBySubmit={searchSavedMovies} 
            currentPath={currentPath} 
            savedMoviesList={savedMoviesList}
            isShowPreloader={showPreloader} 
            handleRemove={removeMovie} 
            handleShowPeloader={handleShowPeloader}    
            handleHidePreloader={handleHidePreloader}
            handleShowFailToolTip={handleShowFailToolTip}               
            //handleUpdateMovies={updateSavedMovies}            
            component = {SavedMovies}
          />

          <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer currentPath={currentPath} />
        <Tooltip tooltip={tooltip} onClose={handleCloseToolTip} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
