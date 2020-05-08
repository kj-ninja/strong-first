import React from 'react';
import './HeroSection.scss';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const HeroSection = () => {
    return (
        <Jumbotron>
            <h2 style={{fontSize: '4rem'}}>Strong First</h2>
            <p className="hero__para">
                Calisthenics to łatwy w użyciu dzienniczek sportowy.
                Zacznij już dziś kontrolować swój progress siłowy.
            </p>
            <p>
                <Link to="/register"><Button variant="primary">Zarejestruj sie za darmo!</Button></Link>
            </p>
        </Jumbotron>
    );
};

export default HeroSection;