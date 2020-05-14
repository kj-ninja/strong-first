import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className="container header__wrapper">
                <h1 className="header__logo">
                    <Link to={props.logoLink}>Calisthenics</Link>
                </h1>
                {props.children}
            </div>
        </header>
    );
};

export default Header;