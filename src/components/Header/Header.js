import React from 'react';
import './Header.scss';
import Burger from "../Burger/Burger";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { MDBBtn } from "mdbreact";


const Header = (props) => {

    return (
        <Nav style={props.navbarStyles}>
            <div style={props.containerStyles} className="container main-wrapper">
                <h1 className="header-logo"><a style={props.logoStyles} href="#">Calisthenics</a></h1>
                {props.isRegister&&<Button variant="primary">Zaloguj się</Button>}
                {props.isLogged&&<Button variant="success">Secondary</Button>}
            </div>
        </Nav>
    );
};

export default Header;