import React from 'react';
import './Hero.scss';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Hero = () => {
    return (
            <Jumbotron>
                <h1>Hello human</h1>
                <p className="hero-para">
                    Calisthenics to łatwy w użyciu dzienniczek sportowy.
                    Zacznij już dziś kontrolować swój progress siłowy.
                </p>
                <p>
                    <Button variant="primary">Zarejestruj sie za darmo!</Button>
                </p>
            </Jumbotron>
    );
};

export default Hero;