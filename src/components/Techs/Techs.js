import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__header">Технологии</h2>
      <div className="techs__row techs__row_type_text">
        <div className="techs__text-wrapper">
          <p className="techs__header-text">7 технологий</p>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
      </div>      
      <ul className="techs__row  techs__row_type_techs">
        <li className="techs__label">HTML</li>
        <li className="techs__label">CSS</li>
        <li className="techs__label">JS</li>
        <li className="techs__label">React</li>
        <li className="techs__label">Git</li>
        <li className="techs__label">Express.js</li>
        <li className="techs__label">mongoDB</li>
      </ul> 
    </section>
  )
}

export default Techs