import React from 'react';
import ReactSelect from "../../ReactSelect/ReactSelect";
import {ErrorMessage, Field} from "formik";

const AddTrainingFormStepTwo = ({setSelectedExercise}) => {
    return (
        <>
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
        </>
    );
};

export default AddTrainingFormStepTwo;