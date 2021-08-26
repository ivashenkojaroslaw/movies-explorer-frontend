
import { MAIN_API_URL } from './constants'

export const register = (email, name, password) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, name, password})
  })  
  .then((res) => {
    return res;
  })
  .then((res) => {
    if(res.status === 400) return Promise.reject('Некорректно заполнено одно из полей') 
    if(res.status === 409) return Promise.reject('Данный email занят')   
    if(res.status === 500) return Promise.reject('Внутренняя ошибка сервера') 
    else return res.json()
  })
}; 

export const authorize = (email,password) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => {return res})
  .then(res => {
    if (res.status === 400) return Promise.reject('Не передано одно из полей') 
    else if (res.status === 401) return Promise.reject('Пользователь с email не найден') 
    else return res.json()   
  })
}; 

export const checkToken = (token) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(res => {return res})
  .then((res)=>{
    if (res.status === 400) return Promise.reject('Не передано одно из полей')
    else if (res.status === 401) return Promise.reject('Пользователь с email не найден') 
    else return res.json()
  })
}


