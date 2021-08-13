import './App.css';
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

function App() {
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
          <SearchForm /> 
          <MoviesCardList isSavedMovies={false}/>
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <MoviesCardList isSavedMovies={true}/>
          <Footer />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
