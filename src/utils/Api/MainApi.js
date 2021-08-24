import { MainApi_URL } from '../constants';


class MainApi {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._headers = options.headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  
  removeMovie(movieId){
    return fetch(`${this._baseURL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }
  
  saveMovie({ country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN }){
    return fetch(`${this._baseURL}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      })
    })
    .then(this._checkResponse)
  }
  
  getMovies(){
    return fetch(`${this._baseURL}/movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse)
  }  

  updateUserData(name, email){
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(this._checkResponse)
  }


  setToken(token){
    this._headers.Authorization = `Bearer ${token}`
  }
}

const mainApi = new MainApi({
  baseURL: MainApi_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
})

export default mainApi