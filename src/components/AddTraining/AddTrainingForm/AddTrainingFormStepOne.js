import React from 'react';
import {ErrorMessage, Field} from "formik";

const AddTrainingFormStepOne = () => {
    return (
        <>
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
        </>
    );
};

export default AddTrainingFormStepOne;