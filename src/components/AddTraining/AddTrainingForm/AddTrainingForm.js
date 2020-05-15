import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import ReactSelect from "../../ReactSelect/ReactSelect";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";

const formInputs = {
    date: new Date().toISOString().substr(0, 10), name: '', duration: '', kcal: '', notes: '', selectedRepetitions: '',
    selectedExerciseTime: '', selectedWeight: ''
};
const validationSchema = Yup.object({
    name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    duration: Yup.string()
        .required('Required'),
    selectedRepetitions: Yup.string()
        .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą'),
    selectedExerciseTime: Yup.string()
        .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą'),
    selectedWeight: Yup.string()
        .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą')
});

const AddTrainingForm = ({setSelectedExercise, handleAddTraining, handleAddSet}) => {
    return (
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

                            <div className="add-training__buttons-container">
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
    );
};

export default AddTrainingForm;