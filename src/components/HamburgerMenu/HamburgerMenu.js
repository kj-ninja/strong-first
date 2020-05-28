import React from 'react';
import './HamburgerMenu.scss';
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import logout from "../../functions/logout";

const HamburgerMenu = (props) => {
    return (
        <Navbar collapseOnSelect expand="md" className="hamburger__navbar">
            <h1 className="hamburger__logo">
                <Link to="/main">StrongFirst</Link>
            </h1>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamburger"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="hamburger__actions">
                    {
                        props.isMain ? <Link to="/big-six">Wielka szóstka</Link> :
                        <Link onClick={() => props.setExercise('table')} to="/big-six">Wielka szóstka</Link>
                    }
                    <Link to="/add-training">Dodaj trening</Link>
                    <Link to="/" onClick={logout}>Wyloguj się</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HamburgerMenu;