import React, {useState} from 'react';
import './Home.scss';
import {Link as ScrollLink} from "react-scroll";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Footer from "../Footer/Footer";
import Jumbotron from "react-bootstrap/Jumbotron";
import useWindowWidth from "../../functions/customHooks/useWindowWidth";
import ScrollAnimation from 'react-animate-on-scroll';

const trainingsImages = [
    require("../../assets/home/at-1.png"),
    require("../../assets/home/at-2.png"),
    require("../../assets/home/at-3.png")
];
const stepsImages = [
    require("../../assets/home/bs-1.png"),
    require("../../assets/home/bs-2.png")
];
const diaryImages = [
    require("../../assets/home/diary-1.png"),
    require("../../assets/home/diary-2.png")

];

const Home = () => {
    const [photoIndexTrainings, setPhotoIndexTrainings] = useState(0);
    const [photoIndexSteps, setPhotoIndexSteps] = useState(0);
    const [photoIndexDiary, setPhotoIndexDiary] = useState(0);
    const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
    const [isStepsOpen, setIsStepsOpen] = useState(false);
    const [isDiaryOpen, setIsDiaryOpen] = useState(false);
    const width = useWindowWidth();

    return (
        <>
            {isTrainingsOpen && (
                <Lightbox
                    mainSrc={trainingsImages[photoIndexTrainings]}
                    nextSrc={trainingsImages[(photoIndexTrainings + 1) % trainingsImages.length]}
                    prevSrc={trainingsImages[(photoIndexTrainings + trainingsImages.length - 1) % trainingsImages.length]}
                    onCloseRequest={() => setIsTrainingsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndexTrainings((photoIndexTrainings + trainingsImages.length - 1) % trainingsImages.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndexTrainings((photoIndexTrainings + 1) % trainingsImages.length)
                    }
                />
            )}
            {isStepsOpen && (
                <Lightbox
                    mainSrc={stepsImages[photoIndexSteps]}
                    nextSrc={stepsImages[(photoIndexSteps + 1) % stepsImages.length]}
                    prevSrc={stepsImages[(photoIndexSteps + stepsImages.length - 1) % stepsImages.length]}
                    onCloseRequest={() => setIsStepsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndexSteps((photoIndexSteps + stepsImages.length - 1) % stepsImages.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndexSteps((photoIndexSteps + 1) % stepsImages.length)
                    }
                />
            )}
            {isDiaryOpen && (
                <Lightbox
                    mainSrc={diaryImages[photoIndexDiary]}
                    nextSrc={diaryImages[(photoIndexDiary + 1) % diaryImages.length]}
                    prevSrc={diaryImages[(photoIndexDiary + diaryImages.length - 1) % diaryImages.length]}
                    onCloseRequest={() => setIsDiaryOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndexDiary((photoIndexDiary + diaryImages.length - 1) % diaryImages.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndexDiary((photoIndexDiary + 1) % diaryImages.length)
                    }
                />
            )}

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
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="home__feature">
                    <div className="home__feature-heading">
                        <h3>Łatwe i szybkie zarządzanie treningami.</h3>
                        <p>
                            Bardzo szybko i przyjemnie możesz dodawać, usuwać czy edytować treningi w swoim aktualnym
                            kalendarzu.
                            W każdej chwili masz dostęp do wykonanych wcześniej treningów, dzięki czemu możesz śledzić
                            swój progres.
                        </p>
                        {width < 1200 ? null : <button type="button" onClick={()=>setIsTrainingsOpen(true)}>Szczegóły >></button>}
                    </div>
                    <div className="home__feature-img">
                        <img src={require('../../assets/home/ft.png')} alt=""/>
                    </div>
                </div>
                </ScrollAnimation>
                <hr/>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="home__feature">
                    <div className="home__feature-img">
                        <img src={require('../../assets/home/ft2.png')} alt=""/>
                    </div>
                    <div className="home__feature-heading">
                        <h3>Twój podręczny trener personalny.</h3>
                        <p>Aplikacja zawiera specjalną sekcję w której opisane są ćwiczenia angażujące praktycznie
                            wszystkie mięśnie. Ponadto ćwiczenia podzielone są na wiele kroków co czyni trening
                            łatwiejszym dla początkujących.</p>
                        {width < 1200 ? null : <button type="button" onClick={()=>setIsStepsOpen(true)}>Szczegóły >></button>}
                    </div>
                </div>
                </ScrollAnimation>
                <hr/>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="home__feature">
                    <div className="home__feature-heading">
                        <h3>Źródło motywacji.</h3>
                        <p>Prowadzenie dziennika treningowego może wpłynąć na zwiększenie efektywności procesu
                            treningowego. Umiejętne wykorzystywanie takich składowych jak obciążenia treningowe,
                            aktualna siła, masa ciała i tryb życia w konsekwencji oddziałuję na szybkość pojawiania
                            się założonych celów treningowych tj. poprawę siły, masy mięśniowej lub redukcję tkanki
                            tłuszczowej.</p>
                        {width < 1200 ? null : <button type="button" onClick={()=>setIsDiaryOpen(true)}>Szczegóły >></button>}
                    </div>
                    <div className="home__feature-img">
                        <img src={require('../../assets/home/ft3.png')} alt=""/>
                    </div>
                </div>
                </ScrollAnimation>
            </section>
            <Footer/>
        </>
    )
}

export default Home;