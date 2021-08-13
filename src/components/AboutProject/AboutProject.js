import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__row about-project__row_type_text">
        <div className="about-project__text-wrapper">
          <p className="about-project__text-header">Дипломный проект включал 5 этапов</p>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__text-wrapper">
          <p className="about-project__text-header">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__row about-project__row_type_tile-line">
        <div className="about-project__graph">
          <div className="about-project__gragh-part about-project__gragh-part_type_small">
            <div className="about-project__time-line about-project__time-line_type_small">
              <p className="about-project__time-line-text about-project__time-line-text_type_small">1 неделя</p>
            </div>
            <p className="about-project__time-line-label">Back-end</p>
          </div>
          <div className="about-project__gragh-part about-project__gragh-part_type_large">
            <div className="about-project__time-line about-project__time-line_type_large">
              <p className="about-project__time-line-text about-project__time-line-text_type_large">4 недели</p>
            </div>
            <p className="about-project__time-line-label">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject