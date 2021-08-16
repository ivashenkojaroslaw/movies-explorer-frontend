import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({check, onClick}) {


  return (
    <div className="checkbox">
        <input className="checkbox__input" id="checkbox" type="checkbox" checked={check} onChange={onClick}/>
        <label className="checkbox__button" htmlFor="checkbox"></label>     
        <p className="checkbox__label">Короткометражки</p>
    </div>    
  )
}

export default FilterCheckbox