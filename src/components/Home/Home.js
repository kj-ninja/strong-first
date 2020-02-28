import React from 'react';
import './Home.scss';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import Header from "../Header/Header";


const Home = () => {
    return (
        <>
            <Header logoHomeLink={"/"}>
                <Link style={{color: 'white'}} to="/login"><Button variant="primary">Zaloguj się</Button></Link>
            </Header>
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
            </>
    );
};

export default Home;