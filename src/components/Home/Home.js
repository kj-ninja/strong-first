import React from 'react';
import './Home.scss';
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";
import Footer from "../Footer/Footer";
import Jumbotron from "react-bootstrap/Jumbotron";

const Home = () => {
    return (
        <>
            <div className="overlay"/>
            <Jumbotron className="hero">
                <div className="hero__para">
                    <h2>Strong First</h2>
                    <p>to łatwy w użyciu i szybki w działaniu dzienniczek sportowy.
                        Zacznij już dziś kontrolować swój postęp siłowy.</p>
                </div>
                <ScrollLink to="features" spy={true} smooth={true} offset={40} duration={500}>
                    <i className="fas fa-arrow-down"/>
                </ScrollLink>
            </Jumbotron>
            <section className="home" id="features">
                <div className="home__feature">
                    <div className="home__feature-heading">
                        <h3>Łatwe i szybkie zarządzanie treningami.</h3>
                        <p>
                            Bardzo szybko i przyjemnie możesz dodawać, usuwać czy edytować treningi w swoim aktualnym
                            kalendarzu.
                            W każdej chwili masz dostęp do wykonanych wcześniej treningów, dzięki czemu możesz śledzić
                            swój progres.
                        </p>
                    </div>
                    <div className="home__feature-img">
                        <img src={require('../../assets/ft.png')} alt=""/>
                    </div>
                </div>
                <hr/>
                <div className="home__feature">
                    <div className="home__feature-img">
                        <img src={require('../../assets/ft2.png')} alt=""/>
                    </div>
                    <div className="home__feature-heading">
                        <h3>Twój podręczny trener personalny.</h3>
                        <p>Aplikacja zawiera specjalną sekcję w której opisane są ćwiczenia angażujące praktycznie
                            wszystkie mięśnie. Ponadto ćwiczenia podzielone są na wiele kroków co czyni trening
                            łatwiejszym dla początkujących.</p>
                    </div>
                </div>
                <hr/>
                <div className="home__feature">
                    <div className="home__feature-heading">
                        <h3>Źródło motywacji.</h3>
                        <p>Prowadzenie dziennika treningowego może wpłynąć na zwiększenie efektywności procesu
                            treningowego. Umiejętne wykorzystywanie takich składowych jak obciążenia treningowe,
                            aktualna siła, masa ciała i tryb życia w konsekwencji oddziałuję na szybkość pojawiania
                            się założonych celów treningowych tj. poprawę siły, masy mięśniowej lub redukcję tkanki
                            tłuszczowej.</p>
                    </div>
                    <div className="home__feature-img">
                        <img src={require('../../assets/ft3.png')} alt=""/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;