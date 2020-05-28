import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import useWindowWith from '../../functions/hooks/useWindowWidth';
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";

const Home = () => {
    const width = useWindowWith();

    if (width < 600) {
        return (
            <>
                <Header logoLink={"/"}>
                    <div className="home__buttons">
                        <Link to="/login"><Button variant="primary">Zaloguj się</Button></Link>
                    </div>
                </Header>
                <HeroSection/>
                {/*<DemoSection/>*/}
                <Footer relative={true}/>
            </>
        )
    }
    return (
        <>
            <Header logoLink={"/"}>
                <div className="home__buttons">
                    <Link to="/register"><Button variant="primary">Zarejestruj się</Button></Link>
                    <Link to="/login"><Button variant="secondary">Zaloguj się</Button></Link>
                </div>
            </Header>
            <HeroSection/>
            {/*<DemoSection/>*/}
            <Footer relative={true}/>
        </>
    )
}

export default Home;