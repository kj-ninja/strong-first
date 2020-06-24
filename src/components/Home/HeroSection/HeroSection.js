import React from 'react';
import './HeroSection.scss';
import Jumbotron from "react-bootstrap/Jumbotron";

const HeroSection = () => {
    return (
        <Jumbotron className="hero">
            <h2>Strong First</h2>
            <p className="hero__para">
                to łatwy w użyciu i szybki w działaniu dzienniczek sportowy.
                Zacznij już dziś kontrolować swój postęp siłowy.
            </p>
        </Jumbotron>
    );
};

export default HeroSection;