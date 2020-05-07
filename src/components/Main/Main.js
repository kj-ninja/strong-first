import React, {useEffect, useState, useContext} from 'react';
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button"
import Calendar from "../Calendar/Calendar";
import FirebaseAuthContext from "../Firebase/auth";
import axios from "axios";

const Main = () => {
    const auth = useContext(FirebaseAuthContext);
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState([]);
    const url = "https://ironman.coderaf.com/training";

    const getTrainings = () => {
        axios.get(
            url,
            {
                'headers': {'Access-Token': `'${auth.currentUser.getIdToken()}'`}
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
    };

    useEffect(()=> {

        getTrainings();
    }, [auth]);

    // add loading spinner
    if (trainings.length === 0) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <>
            <Header logoHomeLink={"/main"}>
                <Link style={{color: 'white'}} to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
            </Header>
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
        </>
    );
};

export default Main;