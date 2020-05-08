import React, {useEffect, useState} from 'react';
import './Main.scss';
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button"
import Calendar from "../Calendar/Calendar";
import axios from "axios";

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

    // add loading spinner
    if (trainings.length === 0 || token === null) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <>
            <Header logoLink={"/main"} styles={styles}>
                <div className="main__buttons">
                    <Link to="/register"><Button variant="primary">Dodaj trening</Button></Link>
                    <Link to="/login"><Button variant="secondary">Wyloguj się</Button></Link>
                </div>
            </Header>
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
        </>
    );
};

export default Main;