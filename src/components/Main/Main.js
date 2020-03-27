import React, {useEffect, useState} from 'react';
import Calendar from "../Calendar/Calendar";
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button"

const Main = () => {
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState({});


    useEffect(()=> {
        fetch("https://ironman.coderaf.com/training")
            .then(response => response.json())
            .then(data => {
                setTrainingToShow(data[data.length-1]);
                setTrainings(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow} />
            <TrainingSummary trainingToShow={trainingToShow}/>
        </>
    );
};

export default Main;