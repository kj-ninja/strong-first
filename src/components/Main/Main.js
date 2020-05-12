import React, {useEffect, useState} from 'react';
import './Main.scss';
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button"
import Calendar from "../Calendar/Calendar";
import axios from "axios";
import firebase from '../Firebase/firebase'
import {getToken} from "../../functions/getToken";
import {isMobile} from 'react-device-detect';

const styles = {
    backgroundColor: '#fff',
    color: "#0056b3"
};

const Main = () => {
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState([]);
    const [token] = useState(getToken());
    const url = "https://ironman.coderaf.com/training";
    console.log(trainings);

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

    const handleLogout = () => {
        firebase.auth().signOut().then(function() {
            console.log('wylogowano');
        }).catch(function(error) {
            console.log(error.message);
        })
    };

    // add loading spinner
    if (trainings.length === 0) {
        return (
            <h1>Loading</h1>
        )
    }

    console.log('renderuje Main');
    if (isMobile) {
        return (
            <>
                <Header logoLink={"/main"} styles={styles}>
                    <div className="main__icons">
                        <Link to="/add-training"><i className="fas fa-plus-circle main__icons--add-training"/></Link>
                        <Link to="/"><i className="fas fa-sign-out-alt main__icons--logout" onClick={handleLogout}/></Link>
                    </div>
                </Header>
                <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
                <TrainingSummary trainingToShow={trainingToShow}/>
            </>
        )
    }
    return (
        <>
            <Header logoLink={"/main"} styles={styles}>
                <div className="main__buttons">
                    <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                    <Link to="/"><Button onClick={handleLogout} variant="secondary">Wyloguj się</Button></Link>
                </div>
            </Header>
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
        </>
    );
};
//
//

export default Main;