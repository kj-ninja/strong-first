import React from 'react';
import './HeroSection.scss';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const HeroSection = ({element}) => {
    return (
        <Jumbotron className="hero">
            <h2 ref={element}>Strong First</h2>
            <p className="hero__para">
                to łatwy w użyciu i szybki w działaniu dzienniczek sportowy.
                Zacznij już dziś kontrolować swój postęp siłowy.
            </p>
            <p>
                <Link to="/register"><Button variant="primary">Zarejestruj sie za darmo!</Button></Link>
            </p>
        </Jumbotron>
    );
};

export default HeroSection;