import React from 'react';
import './NavigationItems.scss';
import {NavLink} from "react-router-dom";

const NavigationItems = () => {
    return (
        <ul className="navigation-items">
            <li className="navigation-item">
                <NavLink exact to="/4">Wielka szóstka</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink exact to="/1">Dodaj trening</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink exact to="/2">Zarejestruj się</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink exact to="/3">Zaloguj się</NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;