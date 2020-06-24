import React from 'react';
import './Home.scss';
import useWindowWith from '../../functions/hooks/useWindowWidth';
import HeroSection from "./HeroSection/HeroSection";
import Footer from "../Footer/Footer";

const Home = () => {
    const width = useWindowWith();

    return (
        <>
            <HeroSection/>
            <Footer relative={true}/>
        </>
    )
}

export default Home;