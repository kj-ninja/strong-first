import React from 'react';
import './Home.scss';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import {isMobile} from 'react-device-detect';

const styles = {
    backgroundColor: '#fff',
    color: "#0056b3"
};

const Home = () => {
    console.log('renderuje Home');
    if (isMobile) {
        return (
            <>
                <Header logoLink={"/"} styles={styles}>
                    <div className="home__buttons">
                        <Link to="/login"><Button variant="primary">Zaloguj się</Button></Link>
                    </div>
                </Header>
                <HeroSection/>
            </>
        )
    }
    return (
        <>
            <Header logoLink={"/"} styles={styles}>
                <div className="home__buttons">
                    <Link to="/register"><Button variant="primary">Zarejestruj się</Button></Link>
                    <Link to="/login"><Button variant="secondary">Zaloguj się</Button></Link>
                </div>
            </Header>
            <HeroSection/>
        </>
    )
}

export default Home;