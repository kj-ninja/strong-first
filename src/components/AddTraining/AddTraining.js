import React, {useState} from 'react';
import './AddTraining.scss';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {getToken} from "../../functions/getToken";
import ReactSelect from "../ReactSelect/ReactSelect";
import Button from "react-bootstrap/Button";
import {getRepsView} from "../../functions/getRepsView";
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import firebase from "../Firebase/firebase";

const AddTraining = () => {
    const [exercisesPreview, setExercisesPreview] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState({});
    const [token] = useState(getToken());
    let today = new Date().toISOString().substr(0, 10);

    const formInputs = {
        date: today, name: '', duration: '', kcal: '', notes: '', selectedRepetitions: '',
        selectedExerciseTime: '', selectedWeight: ''
    };
    const validationSchema = Yup.object({
        name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        duration: Yup.string()
            .required('Required'),
        selectedRepetitions: Yup.string()
            .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą')
            .required('Required'),
        selectedExerciseTime: Yup.string()
            .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą'),
        selectedWeight: Yup.string()
            .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą')
    });

    const handleAddSet = (values) => {
        let index = null;
        console.log(values);

        exercisesPreview.forEach((exercisePreview, i) => {
            if (exercisePreview.id === selectedExercise.value) {
                index = i;
            }
        });

        if (index !== null) {
            const tempArray = [...exercisesPreview];
            tempArray[index].repetitions.push(values.selectedRepetitions);
            tempArray[index].weight.push(values.selectedWeight);
            tempArray[index].time.push(values.selectedExerciseTime);

            setExercisesPreview(tempArray);
        } else {
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
        }
    };

    const handleDeleteExercise = (id) => {
        const tempArray = exercisesPreview.filter(exercise => {
            return exercise.id !== id
        });
        setExercisesPreview(tempArray);
    };

    const handleAddTraining = (values) => {
        const API = "https://ironman.coderaf.com/training";
        const tempSets = [];

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

    return (
        <>
            <Header logoLink={"/main"}>
                <Link to="/"><Button onClick={handleLogout} variant="primary">Wyloguj się</Button></Link>
            </Header>

            <Formik
                initialValues={formInputs}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleAddTraining(values);
                }}
            >
                {({values}) => {
                    return (
                        <Form className="add-training__form">
                            <div className="add-training__container">
                                <div className="add-training__form-group">
                                    <label htmlFor="date">Data:</label>
                                    <Field name="date" type="date" className="form-control form-control-sm"/>
                                </div>
                                <div className="add-training__form-group">
                                    <label htmlFor="name">Nazwa:</label>
                                    <Field name="name" type="text" placeholder="Podaj nazwę treningu"
                                           className="form-control form-control-sm"/>
                                    <p className="add-training__error-message">
                                        <ErrorMessage name="name"/>
                                    </p>
                                </div>
                                <div className="add-training__form-group">
                                    <label htmlFor="duration">Czas trwania:</label>
                                    <Field name="duration" type="text" placeholder="Podaj czas trwania treningu"
                                           className="form-control form-control-sm"/>
                                    <p className="add-training__error-message">
                                        <ErrorMessage name="duration"/>
                                    </p>
                                </div>
                                <div className="add-training__form-group">
                                    <label htmlFor="kcal">Kcal:</label>
                                    <Field name="kcal" type="text" placeholder="Ilość spalonych kalorii"
                                           className="form-control form-control-sm"/>
                                    <ErrorMessage name="kcal"/>
                                </div>
                                <div className="add-training__form-group notes">
                                    <label htmlFor="notes">Notatki:</label>
                                    <Field name="notes" as="textarea" className="form-control" rows={3}/>
                                </div>

                                <div className="add-training__form-group reactSelect">
                                    <label>Ćwiczenie</label>
                                    <ReactSelect setExercise={setSelectedExercise}/>
                                </div>
                                <div className="add-training__form-group">
                                    <label htmlFor="selectedRepetitions">Powtórzenia:</label>
                                    <Field name="selectedRepetitions" type="text" placeholder="Podaj ilość powtórzeń"
                                           className="form-control form-control-sm"/>
                                    <p className="add-training__error-message">
                                        <ErrorMessage name="selectedRepetitions"/>
                                    </p>
                                </div>
                                <div className="add-training__form-group">
                                    <label htmlFor="selectedExerciseTime">Czas:</label>
                                    <Field name="selectedExerciseTime" type="text" placeholder=""
                                           className="form-control form-control-sm"/>
                                    <p className="add-training__error-message">
                                        <ErrorMessage name="selectedExerciseTime"/>
                                    </p>
                                </div>
                                <div className="add-training__form-group">
                                    <label htmlFor="selectedWeight">Ciężar:</label>
                                    <Field name="selectedWeight" type="text" placeholder=""
                                           className="form-control form-control-sm"/>
                                    <p className="add-training__error-message">
                                        <ErrorMessage name="selectedWeight"/>
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between container__add-training">
                                    <Button className="btn btn-primary" onClick={()=>handleAddSet(values)}>Dodaj serię
                                    </Button>
                                    <Button type="submit" className="btn btn-success pull-right">Zapisz trening
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
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