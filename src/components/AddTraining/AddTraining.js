import React, {useState} from 'react';
import './AddTraining.scss';
import {getToken} from "../../functions/getToken";
import Button from "react-bootstrap/Button";
import {getRepsView} from "../../functions/getRepsView";
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import firebase from "../Firebase/firebase";
import AddTrainingForm from "./AddTrainingForm/AddTrainingForm";

const AddTraining = (props) => {
    const [exercisesPreview, setExercisesPreview] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState({});
    const [token] = useState(getToken());

    const handleAddSet = (values) => {

        console.log(values);

        // zmien na setsView
        // getIndexOfSelectedExercise
        let index = null;
        exercisesPreview.forEach((exercisePreview, i) => {
            if (exercisePreview.id === selectedExercise.value) {
                index = i;
            }
        });

        // nie ma indexu czyli trzeba stworzyc obiekt exercise a potem dodac do niego set
        if (index === null) {
            // odpal funckje stworz obiekt z cwiczeniem
            // createExerciseView
            // odpal funkcje dodaj set do cwiczenia
            // addSetToSelectedExercise
            setExercisesPreview(prevState => {
                return (
                    [...prevState, {
                        name: selectedExercise.label,
                        repetitions: [values.selectedRepetitions],
                        weight: [values.selectedWeight],
                        time: [values.selectedExerciseTime],
                        id: selectedExercise.value
                    }]
                )
            });
            // jesli mamy index to znaczy ze obiekt exercicse juz jest
        } else {

            // addSetToSelectedExercise
            const tempArray = [...exercisesPreview];
            tempArray[index].repetitions.push(values.selectedRepetitions);
            tempArray[index].weight.push(values.selectedWeight);
            tempArray[index].time.push(values.selectedExerciseTime);

            setExercisesPreview(tempArray);
        }
    };

    const handleDeleteExercise = (id) => {
        const tempArray = exercisesPreview.filter(exercise => {
            return exercise.id !== id
        });
        setExercisesPreview(tempArray);
    };

    const handleAddTraining = (values) => {
        const tempSets = [];


        // wydziel do funkcji getTrainingDataFromView
        // przyjmie exercisePreview i zwraca training
        exercisesPreview.forEach((exercise, i) => {
            exercise.repetitions.forEach((rep, j) => {
                tempSets.push({
                    exerciseId: +exercisesPreview[i].id,
                    repetitions: +exercisesPreview[i].repetitions[j],
                    weight: +exercisesPreview[i].weight[j],
                    time: +exercisesPreview[i].time[j]
                })
            });
        });

        const training = {
            name: values.name,
            note: values.notes,
            date: values.date + ' 00:00:00',
            duration: +values.duration,
            kcal: +values.kcal,
            sets: tempSets
        };

        // wydzielic do funkcji
        // sendTrainingToApi
        // przyjmuje tylko trening
        const API = "https://ironman.coderaf.com/training";

        axios.post(API, training, {
            headers: {
                'Access-Token': token
            },
        })
            .then(function (res) {
                // handle success
                console.log('treningi wyslane');
                props.history.replace('/main');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleLogout = () => {
        firebase.auth().signOut().then(function () {
        }).catch(function (error) {
            console.log(error.message);
        })
    };

    return (
        <>
            <Header logoLink={"/main"}>
                <Link to="/"><Button onClick={handleLogout} variant="primary">Wyloguj się</Button></Link>
            </Header>

            <AddTrainingForm setSelectedExercise={setSelectedExercise} handleAddTraining={handleAddTraining}
                             handleAddSet={handleAddSet}/>

            <ul className="list-group">
                {exercisesPreview.map(element => {
                    return (
                        <li key={element.id} className="list-group-item">
                            {element.name.toUpperCase()}: {getRepsView(element)}
                            <button onClick={() => handleDeleteExercise(element.id)} type="button"
                                    className="close"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default AddTraining;