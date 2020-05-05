import React, {useEffect, useState} from 'react';
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button"
import Calendar from "../Calendar/Calendar";

const trainingsFromApi = [
    {
        "id": 2,
        "name": "tyram cos",
        "date": "2020-03-08 00:00:00",
        "duration": 3540,
        "kcal": 450,
        "note": "niezle poszlo ale hantelki mogly by byc ciezsze w 4 serii.",
        "sets": [
            {
                "id": 13,
                "time": 0,
                "weight": 0,
                "repetitions": 10,
                "exercise": {
                    "id": 1,
                    "name": "pompki",
                    "musclePart": {
                        "id": 1,
                        "name": "klata",
                        "iconPath": "/img/klata.svg"
                    }
                }
            },
            {
                "id": 14,
                "time": 0,
                "weight": 0,
                "repetitions": 11,
                "exercise": {
                    "id": 1,
                    "name": "pompki",
                    "musclePart": {
                        "id": 1,
                        "name": "klata",
                        "iconPath": "/img/klata.svg"
                    }
                }
            },
            {
                "id": 15,
                "time": 0,
                "weight": 40,
                "repetitions": 10,
                "exercise": {
                    "id": 2,
                    "name": "przysiady",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 16,
                "time": 0,
                "weight": 45,
                "repetitions": 8,
                "exercise": {
                    "id": 2,
                    "name": "przysiady",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 17,
                "time": 0,
                "weight": 45,
                "repetitions": 8,
                "exercise": {
                    "id": 3,
                    "name": "martwe ciągi",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 18,
                "time": 0,
                "weight": 45,
                "repetitions": 8,
                "exercise": {
                    "id": 3,
                    "name": "martwe ciągi",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 19,
                "time": 0,
                "weight": 0,
                "repetitions": 8,
                "exercise": {
                    "id": 4,
                    "name": "podciągnięcia",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 20,
                "time": 0,
                "weight": 5,
                "repetitions": 8,
                "exercise": {
                    "id": 4,
                    "name": "podciągnięcia",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 21,
                "time": 0,
                "weight": 6,
                "repetitions": 10,
                "exercise": {
                    "id": 5,
                    "name": "wiosłowanie hantlą",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 22,
                "time": 0,
                "weight": 8,
                "repetitions": 10,
                "exercise": {
                    "id": 5,
                    "name": "wiosłowanie hantlą",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 23,
                "time": 60,
                "weight": 0,
                "repetitions": 0,
                "exercise": {
                    "id": 6,
                    "name": "skakanka",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 24,
                "time": 20,
                "weight": 0,
                "repetitions": 0,
                "exercise": {
                    "id": 6,
                    "name": "skakanka",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            }
        ]
    }
];

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
    // if (trainings.length === 0) {
    //     return (
    //         <h1>Loading</h1>
    //     )
    // }

    return (
        <>
            <Header logoHomeLink={"/main"}>
                <Link style={{color: 'white'}} to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
            </Header>
            <Calendar trainings={trainingsFromApi} />
            <TrainingSummary trainingToShow={trainingsFromApi[0]}/>
        </>
    );
};

export default Main;