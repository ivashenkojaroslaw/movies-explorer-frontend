import { DURATION_SHORT_MOVIE } from './constants';

export const searchMovies = (arr, keyWord, isIncludeShortMovies) => {
  const res = arr.filter(item => {
    if ((item.description && item.description.toLowerCase().search(keyWord.toLowerCase()) > -1) || 
    (item.nameRU && item.nameRU.toLowerCase().search(keyWord.toLowerCase()) > -1) || 
    (item.nameEN && item.nameEN.toLowerCase().search(keyWord.toLowerCase()) > -1) ) {
      if(isIncludeShortMovies){
        return item
      }else{
        if(item.duration >= DURATION_SHORT_MOVIE) return item
      }
       
    }
  })
  return res
}

export const filterMovies = (arr, isFilter) => {
  const res = arr.filter(item => {
    if (isFilter)  return item
    else {
      if(item.duration >= DURATION_SHORT_MOVIE) return item
    }
  })
  return res
}