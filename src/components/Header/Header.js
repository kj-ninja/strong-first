import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={props.sticky ? 'navbar navbar-sticky' : null}>
            <div className="header__container header__wrapper">
                <h1 className="header__logo">
                    <Link to={props.logoLink}>StrongFirst</Link>
                </h1>
                {props.children}
            </div>
        </header>
    );
};

export default Header;