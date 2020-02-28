import React from 'react';
import './Header.scss';
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";


const Header = (props) => {

    return (
        <Nav>
            <div className="container main__header-wrapper">
                <h1 className="header-logo"><Link to={props.logoHomeLink}>Calisthenics</Link></h1>
                {props.children}
            </div>
        </Nav>
    );
};

export default Header;