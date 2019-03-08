import React from 'react';
import './InfoFooter.css';

const infoFooter = () => {
    return (
        <div className="infoFooter">
            <ul className="infoFooter__list">
                <li className="infoFooter__list__items"><a href="https://www.github.com/Mehto00">Mehto00 did this</a></li>
                <li className="infoFooter__list__items"><a href="https://github.com/Mehto00/react-weather-app">Repo here</a></li>
                <li className="infoFooter__list__items"><a href="https://www.linkedin.com/in/mikkometso/">LinkedIn stuff here</a></li>
            </ul>
        </div>
    )
}

export default infoFooter;