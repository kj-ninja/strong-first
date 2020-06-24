import React from 'react';
import './Toolbar.scss';
import {Link} from "react-router-dom";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
    return (
        <header>
            <div className="header__container header__wrapper">
                <h1 className="header__logo">
                    <Link to="/">Strong<span className="header__logo--accent">First</span></Link>
                </h1>
                <i className="fas fa-bars hamburger" onClick={props.showDrawer}/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </header>
    );
};

export default Toolbar;