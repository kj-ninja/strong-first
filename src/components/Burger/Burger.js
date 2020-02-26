import { slide as Menu } from 'react-burger-menu'
import React from "react";
import './Burger.scss';

class Burger extends React.Component {
    render () {
        return (
            <Menu right>
                <a id="home" className="menu-item" href="/">Dodaj trening</a>
                <a id="about" className="menu-item" href="/about">Historia treningów</a>
                <a id="contact" className="menu-item" href="/contact">Statystyki</a>
            </Menu>
        );
    }
}
export default Burger