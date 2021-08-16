import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  
  const [check,  setCheck] = React.useState(true);
  
  const handleClickByCheckbox = () => {
    setCheck(!check)
  }

  return (
    <section className="search-section">
      <form className="search-section__form">
        <fieldset className="search-section__fieldset search-section__fieldset_type_search">
          <input type="text" className="search-section__input" placeholder="Фильм" required></input>
          <button type="button" className="search-section__button">Найти</button>
        </fieldset>
        <fieldset className="search-section__fieldset search-section__fieldset_type_check">
          <FilterCheckbox check={check} onClick={handleClickByCheckbox}/> 
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm