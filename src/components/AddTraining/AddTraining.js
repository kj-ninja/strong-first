import React, {useState} from 'react';
import './AddTraining.scss';
import ReactSelect from "../ReactSelect/ReactSelect";
import {getRepsView} from "../../functions/getRepsView";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import firebase from "../Firebase/firebase";
import {getToken} from "../../functions/getToken";
import axios from 'axios';

const AddTraining = () => {
    const [exercisesPreview, setExercisesPreview] = useState([]);
    let today = new Date().toISOString().substr(0, 10);
    const [date, setDate] = useState(today);
    const [name, setName] = useState('');
    const [duration, setDuration] = useState(0);
    const [kcal, setKcal] = useState(0);
    const [notes, setNotes] = useState('');
    const [selectedExercise, setSelectedExercise] = useState({});
    const [selectedRepetitions, setSelectedRepetitions] = useState(0);
    const [selectedExerciseTime, setSelectedExerciseTime] = useState(0);
    const [selectedWeight, setSelectedWeight] = useState(0);
    const [token] = useState(getToken());

    const handleAddSet = () => {
        let index = null;

        exercisesPreview.forEach((exercisePreview, i) => {
            if (exercisePreview.id === selectedExercise.value) {
                index = i;
            }
        });

        if (index !== null) {
            const tempArray = [...exercisesPreview];
            tempArray[index].repetitions.push(selectedRepetitions);
            tempArray[index].weight.push(selectedWeight);
            tempArray[index].time.push(selectedExerciseTime);

            setExercisesPreview(tempArray);
        } else {
            setExercisesPreview(prevState => {
                return (
                    [...prevState, {
                        name: selectedExercise.label,
                        repetitions: [selectedRepetitions],
                        weight: [selectedWeight],
                        time: [selectedExerciseTime],
                        id: selectedExercise.value
                    }]
                )
            });
        }
    };

    const handleDeleteExercise = (id) => {
        const tempArray = exercisesPreview.filter(exercise => {
            return exercise.id !== id
        });
        setExercisesPreview(tempArray);
    };

    const handleAddTraining = (e) => {
        e.preventDefault();
        const API = "https://ironman.coderaf.com/training";
        const tempSets = [];

        exercisesPreview.forEach((exercise, i) => {
            exercise.repetitions.forEach((rep, j) => {
                tempSets.push({
                    exerciseId: exercisesPreview[i].id,
                    repetitions: exercisesPreview[i].repetitions[j],
                    weight: exercisesPreview[i].weight[j],
                    time: exercisesPreview[i].time[j]
                })
            });
        });

        const training = {
            name,
            note: notes,
            date: date + ' 00:00:00',
            duration,
            kcal,
            sets: tempSets
        };

        axios.post(API, training, {
            headers: {
            'Access-Token': token
            },
        })
            .then(function (res) {
                // handle success
                console.log('treningi wyslane');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleLogout = () => {
        firebase.auth().signOut().then(function() {
        }).catch(function(error) {
            console.log(error.message);
        })
    };

    console.log('renderuje Add-training');
    return (
        <>
            <Header logoLink={"/main"}>
                <Link to="/"><Button onClick={handleLogout} variant="primary">Wyloguj się</Button></Link>
            </Header>

            <div className="container d-flex">
                <div className="container__add-training">
                    <form>
                        <div className="form-group form-inline">
                            <label htmlFor="date">Data:</label>
                            <input type="date" className="form-control form-control-sm" id="date"
                                   onChange={(e) => setDate(e.target.value)} defaultValue={today}/>
                        </div>
                        <div className="form-group form-inline">
                            <label htmlFor="name">Nazwa:</label>
                            <input type="text" className="form-control form-control-sm" id="name"
                                   placeholder="Podaj nazwę treningu"
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group form-inline">
                            <label htmlFor="time">Czas trwania:</label>
                            <input type="text" className="form-control form-control-sm" id="time"
                                   placeholder="Podaj czas trwania treningu"
                                   onChange={((e) => setDuration(+e.target.value))}/>
                        </div>
                        <div className="form-group form-inline">
                            <label htmlFor="kcal">Kcal:</label>
                            <input type="text" className="form-control form-control-sm" id="kcal"
                                   placeholder="Ilość spalonych kalorii"
                                   onChange={(e) => {
                                       setKcal(+e.target.value);
                                   }}/>
                        </div>
                        <div className="form-group notes">
                            <label htmlFor="exampleFormControlTextarea1">Notatki:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                      onChange={(e) => {
                                          setNotes(e.target.value)
                                      }}/>
                        </div>

                        <div className="form-group form-inline">
                            <label>Ćwiczenie:</label>
                            <ReactSelect setExercise={setSelectedExercise}/>
                        </div>
                        <div className="form-group form-inline">
                            <label htmlFor="reps">Powtórzenia:</label>
                            <input type="text" className="form-control form-control-sm" id="reps"
                                   placeholder="Podaj ilość powtórzeń"
                                   onChange={(e) => {
                                       setSelectedRepetitions(e.target.value === '' ? 0 : +e.target.value)
                                   }}/>
                        </div>
                        <div className="form-group form-inline">
                            <label htmlFor="time">Czas:</label>
                            <input type="text" className="form-control form-control-sm" id="time" placeholder=""
                                   onChange={(e) => {
                                       setSelectedExerciseTime(e.target.value === '' ? 0 : +e.target.value)
                                   }}/>
                        </div>
                        <div className="form-group form-inline">
                            <label htmlFor="weight">Ciężar:</label>
                            <input type="text" className="form-control form-control-sm" id="weight" placeholder=""
                                   onChange={(e) => {
                                       setSelectedWeight(e.target.value === '' ? 0 : +e.target.value)
                                   }}/>
                        </div>
                        <div className="d-flex justify-content-between container__add-training">
                            <button type="button" className="btn btn-primary" onClick={handleAddSet}>Dodaj serię
                            </button>
                            <button type="button" className="btn btn-success pull-right"
                                    onClick={(e) => handleAddTraining(e)}>Zapisz trening
                            </button>
                        </div>
                    </form>
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
                </div>
            </div>
        </>
    );
};

export default AddTraining