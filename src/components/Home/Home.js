import React from 'react';
import './Home.scss';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import {isMobile} from 'react-device-detect';
import DemoSection from "../DemoSection/DemoSection";
import useSticky from "../../functions/hooks/useSticky";
import Footer from "../Footer/Footer";

const Home = () => {
    const { isSticky, element } = useSticky()
    if (isMobile) {
        return (
            <>
                <Header logoLink={"/"} sticky={isSticky}>
                    <div className="home__buttons">
                        <Link to="/login"><Button variant="primary">Zaloguj się</Button></Link>
                    </div>
                </Header>
                <HeroSection element={element} sticky={isSticky}/>
                <DemoSection/>
                <Footer relative={true}/>
            </>
        )
    }
    return (
        <>
            <Header logoLink={"/"} sticky={isSticky}>
                <div className="home__buttons">
                    <Link to="/register"><Button variant="primary">Zarejestruj się</Button></Link>
                    <Link to="/login"><Button variant="secondary">Zaloguj się</Button></Link>
                </div>
            </Header>
            <HeroSection element={element} sticky={isSticky}/>
            <DemoSection/>
            <Footer relative={true}/>
        </>
    )
}

export default Home;