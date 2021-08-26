import { MOVIES_API_URL } from '../constants';

class MoviesApi {
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

  getMovies() {
    return fetch(`${this._baseURL}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse)
  }
}

const moviesApi = new MoviesApi({
  baseURL: MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default moviesApi