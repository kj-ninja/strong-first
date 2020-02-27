import React from 'react';
import './Header.scss';
import Burger from "../Burger/Burger";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


const Header = (props) => {

    return (
        <Nav style={props.navbarStyles}>
            <div style={props.containerStyles} className="container main-wrapper">
                <h1 className="header-logo"><Link to="/" style={props.logoStyles}>Calisthenics</Link></h1>
                {props.isRegister&&<Button variant="primary"><Link to="/login"> Zaloguj się</Link></Button>}
                {props.isLogged&&<Button variant="primary">Dodaj trening</Button>}
            </div>
        </Nav>
    );
};

export default Header;