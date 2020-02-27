import React from 'react';
import './Home.scss';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
            <Jumbotron>
                <h1>Hello human</h1>
                <p className="hero-para">
                    Calisthenics to łatwy w użyciu dzienniczek sportowy.
                    Zacznij już dziś kontrolować swój progress siłowy.
                </p>
                <p>
                    <Button variant="primary"><Link to="/register">Zarejestruj sie za darmo!</Link></Button>
                </p>
            </Jumbotron>
    );
};

export default Home;