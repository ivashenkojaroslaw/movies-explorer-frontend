import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from "../../utils/Validator/Validator";
import { movieNamePattern } from "../../utils/regExp";


function SearchForm({ searchMovies, filterMovies }) {
  
  const [check,  setCheck] = React.useState(true);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleClickBySendData = () => {
    searchMovies(values.name, check);    
  }
  
  const handleClickByCheckbox = () => {
    if(isValid){
      filterMovies(values.name || '', !check);
      setCheck(!check);   
    } 
  }


  return (
    <section className="search-section">
      <form className="search-section__form">
        <fieldset className="search-section__fieldset search-section__fieldset_type_search">
          <div className="search-section__wrap">
            <input 
                  type="text" 
                  className="search-section__input" 
                  placeholder="Фильм" 
                  required
                  name="name"
                  value={values.name || ''}
                  onChange={handleChange}
                  pattern={movieNamePattern}
            ></input>
            <span className="search-section__error">{errors.name}</span>
          </div>          
          <button 
            type="button" 
            className={`search-section__button ${isValid ? '' : 'search-section__button_invalid'}`}
            onClick={isValid ? handleClickBySendData : () => {}}          
          >Найти</button>
        </fieldset>
        <fieldset className="search-section__fieldset search-section__fieldset_type_check">
          <FilterCheckbox check={check} onClick={handleClickByCheckbox}/> 
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm