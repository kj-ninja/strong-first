import React, {useEffect, useState} from 'react';
import './Main.scss';
import {Link} from "react-router-dom";
import useWindowWidth from "../../functions/hooks/useWindowWidth";
import {getToken} from "../../functions/getToken";
import {getTrainings} from "../Ironman/Ironman";
import handleLogout from "../../functions/logout";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import Button from "react-bootstrap/Button"
import Calendar from "../Calendar/Calendar";
import Footer from "../Footer/Footer";

const Main = () => {
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState([]);
    const [token] = useState(getToken());
    const width = useWindowWidth();

    useEffect(()=>{
        console.log('fetch do ironman');
        getTrainings(setTrainingToShow, setTrainings);
    }, [token]);

    // add loading spinner
    if (trainings.length === 0) {
        if (width < 650) {
            return (
                <>
                    {/*<Header logoLink={"/main"}>*/}
                    {/*    <div className="main__icons">*/}
                    {/*        <Link to="/add-training"><i className="fas fa-plus-circle main__icons--add-training"/></Link>*/}
                    {/*        <Link to="/"><i className="fas fa-sign-out-alt main__icons--logout" onClick={handleLogout}/></Link>*/}
                    {/*    </div>*/}
                    {/*</Header>*/}
                    <HamburgerMenu/>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </>
            )
        }
        return (
            <>
                <Header logoLink={"/main"}>
                    <div className="big-six__buttons--desktop">
                        <Link to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>
                        <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                        <Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}
                                             variant="secondary">
                            Wyloguj się</Button>
                        </Link>
                    </div>
                </Header>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </>
        )

    }

    console.log('renderuje Main');
    if (width < 650) {
        return (
            <>
                {/*<Header logoLink={"/main"}>*/}
                {/*    <div className="main__icons">*/}
                {/*        <Link to="/add-training"><i className="fas fa-plus-circle main__icons--add-training"/></Link>*/}
                {/*        <Link to="/"><i className="fas fa-sign-out-alt main__icons--logout" onClick={handleLogout}/></Link>*/}
                {/*    </div>*/}
                {/*</Header>*/}
                <HamburgerMenu isMain={true}/>
                <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
                <TrainingSummary trainingToShow={trainingToShow}/>
                <Footer relative={true}/>
            </>
        )
    }
    return (
        <>
            <Header logoLink={"/main"}>
                <div className="big-six__buttons--desktop">
                    <Link to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>
                    <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                    <Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}
                                         variant="secondary">
                        Wyloguj się</Button>
                    </Link>
                </div>
            </Header>
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
            <Footer relative={false}/>
        </>
    );
};

export default Main;