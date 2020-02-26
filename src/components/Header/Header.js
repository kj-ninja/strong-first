import React from 'react';
import './Header.scss';
import Burger from "../Burger/Burger";

const Header = () => {
    return (
        <nav>
            <h1 className="header-logo">Calisthenics</h1>
            <Burger />
        </nav>
    );
};

export default Header;