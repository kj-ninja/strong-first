import React, {useEffect, useState} from 'react';
import './Diary.scss';
import {Link} from "react-router-dom";
import useWindowWidth from "../../functions/hooks/useWindowWidth";
import {getToken} from "../../functions/getToken";
import {getTrainings} from "../../api/ironman";
import handleLogout from "../../functions/logout";
import TrainingSummary from "./TrainingSummary/TrainingSummary";
import Button from "react-bootstrap/Button"
import Calendar from "./Calendar/Calendar";
import Footer from "../../components/Footer/Footer";

const Diary = () => {
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
                    <div className="big-six__buttons--desktop">
                        {/*<Link to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>*/}
                        {/*<Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>*/}
                        {/*<Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}*/}
                        {/*                     variant="secondary">*/}
                        {/*    Wyloguj się</Button>*/}
                        {/*</Link>*/}
                    </div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    if (width < 650) {
        return (
            <>
                <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
                <TrainingSummary trainingToShow={trainingToShow}/>
                <Footer relative={true}/>
            </>
        )
    }
    return (
        <>
                <div className="big-six__buttons--desktop">
                    {/*<Link to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>*/}
                    {/*<Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>*/}
                    {/*<Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}*/}
                    {/*                     variant="secondary">*/}
                    {/*    Wyloguj się</Button>*/}
                    {/*</Link>*/}
                </div>
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
        </>
    );
};

export default Diary;