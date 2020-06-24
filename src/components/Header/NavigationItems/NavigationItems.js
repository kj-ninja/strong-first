import React from 'react';
import './NavigationItems.scss';
import {NavLink} from "react-router-dom";

const NavigationItems = () => {
    return (
        <ul className="navigation-items">
            <li className="navigation-item">
                <NavLink exact to="/big-six">Wielka szóstka</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink exact to="/add-training">Dodaj trening</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink exact to="/register">Zarejestruj się</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink exact to="/login">Zaloguj się</NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;