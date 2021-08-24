export const searchMovies = (arr, keyWord) => {
  const res = arr.filter(item => {
    if (item.description.toLowerCase().search(keyWord.toLowerCase()) > -1) {
       return item
    }
  })
  return res
}

export const filterMovies = (arr, isFilter) => {
  const res = arr.filter(item => {
    if (isFilter)  return item
    else {
      if(item.duration >= 40) return item
    }
  })
  return res
}