import React, {useEffect, useState} from 'react';
import './Main.scss';
import axios from "axios";
import {isMobile} from 'react-device-detect';
import {Link} from "react-router-dom";
import handleLogout from "../../functions/logout";
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button"
import Calendar from "../Calendar/Calendar";
import {getToken} from "../../functions/getToken";
import Footer from "../Footer/Footer";

const Main = () => {
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState([]);
    const [token] = useState(getToken());
    const url = "https://ironman.coderaf.com/training";

    useEffect(()=>{
        console.log('fetch do ironman');
        axios.get(
            url,
            {
                'headers': {'Access-Token': token}
            })
            .then(function (response) {
                // handle success
                console.log('treningi pobrane');
                setTrainingToShow(response.data[response.data.length-1]);
                setTrainings(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [token]);

    // add loading spinner
    if (trainings.length === 0) {
        if (isMobile) {
            return (
                <>
                    <Header logoLink={"/main"}>
                        <div className="main__icons">
                            <Link to="/add-training"><i className="fas fa-plus-circle main__icons--add-training"/></Link>
                            <Link to="/"><i className="fas fa-sign-out-alt main__icons--logout" onClick={handleLogout}/></Link>
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
        return (
            <>
                <Header logoLink={"/main"}>
                    <div className="main__buttons">
                        <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                        <Link to="/"><Button onClick={handleLogout} variant="secondary">Wyloguj się</Button></Link>
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
    if (isMobile) {
        return (
            <>
                <Header logoLink={"/main"}>
                    <div className="main__icons">
                        <Link to="/add-training"><i className="fas fa-plus-circle main__icons--add-training"/></Link>
                        <Link to="/"><i className="fas fa-sign-out-alt main__icons--logout" onClick={handleLogout}/></Link>
                    </div>
                </Header>
                <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
                <TrainingSummary trainingToShow={trainingToShow}/>
                <Footer relative={true}/>
            </>
        )
    }
    return (
        <>
            <Header logoLink={"/main"}>
                <div className="main__buttons">
                    <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                    <Link to="/"><Button onClick={handleLogout} variant="secondary">Wyloguj się</Button></Link>
                </div>
            </Header>
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
            <Footer relative={false}/>
        </>
    );
};

export default Main;