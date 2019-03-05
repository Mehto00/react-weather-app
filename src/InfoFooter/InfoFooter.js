import React from 'react';
import './InfoFooter.css';

const infoFooter = () => {
    return (
        <div className="infoFooter">
            <ul className="infoFooter__list">
                <li className="infoFooter__list__items"><a href="https://www.github.com/Mehto00">Mehto00 did this</a></li>
                <li className="infoFooter__list__items"><a href="https://www.github.com/Mehto00">Repo available here</a></li>
                <li className="infoFooter__list__items"><a href="https://www.github.com/Mehto00">LinkedIn stuff here</a></li>
            </ul>
        </div>
    )
}

export default infoFooter;