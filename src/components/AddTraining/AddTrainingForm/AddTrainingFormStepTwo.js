import React from 'react';
import ReactSelect from "../../ReactSelect/ReactSelect";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

const AddTrainingFormStepTwo = ({setSelectedExercise, handleAddTraining, handleAddSet, valuesStepOne}) => {
    const formInputs = {
        selectedRepetitions: '', selectedExerciseTime: '', selectedWeight: ''
    };
    const validationSchema = Yup.object({
        selectedRepetitions: Yup.string()
            .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą'),
        selectedExerciseTime: Yup.string()
            .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą'),
        selectedWeight: Yup.string()
            .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą')
    });

    return (
        <>
            <Formik
                initialValues={formInputs}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleAddTraining(values, valuesStepOne);
                }}
            >
                {({values}) => {
                    return (
                        <Form className="add-training__form">
                            <div className="add-training__container">
                                <div className="add-training__form-group reactSelect">
                                    <label>Ćwiczenie</label>
                                    <ReactSelect setExercise={setSelectedExercise} name="selectedExercise"/>
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
                                    <Button className="btn btn-primary" onClick={() => handleAddSet(values, valuesStepOne)}>
                                        Dodaj serię
                                    </Button>
                                    <Button type="submit" className="btn btn-success pull-right">Zapisz trening
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default AddTrainingFormStepTwo;