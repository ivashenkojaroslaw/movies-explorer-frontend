import React from 'react'
import './Preloader.css'

const Preloader = ({ isShow }) => {
    return (
        <div className={`preloader ${isShow ? '' : 'preloader_hidden'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
