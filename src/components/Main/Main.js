import React, {useEffect, useState} from 'react';
import './Main.scss';
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import {Link, Redirect} from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button"
import Calendar from "../Calendar/Calendar";
import axios from "axios";
import firebase from '../Firebase/firebase'

const styles = {
    backgroundColor: '#fff',
    color: "#0056b3"
};

const Main = ({token}) => {
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState([]);
    const url = "https://ironman.coderaf.com/training";

    useEffect(()=> {
        axios.get(
            url,
            {
                'headers': {'Access-Token': `'${token}'`}
            })
            .then(function (response) {
                // handle success
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
        }).catch(function(error) {
            console.log(error.message);
        })
    };

    // add loading spinner
    console.log(trainings);
    if (trainings.length === 0 || token === null) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <>
            <Header logoLink={"/main"} styles={styles}>
                <div className="main__buttons">
                    <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                    <Link to="/"><Button onClick={handleLogout()} variant="secondary">Wyloguj się</Button></Link>
                </div>
            </Header>
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
        </>
    );
};

export default Main;