import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

const AddTrainingFormStepOne = ({handleNextStep, setValuesStepOne}) => {


    const formInputs = {
        date: new Date().toISOString().substr(0, 10), name: '', duration: '', kcal: '', notes: ''
    };
    const validationSchema = Yup.object({
        name: Yup.string()
            .max(50, 'Maksymalnie 50 znaków')
            .required('Pole wymagane'),
        duration: Yup.string()
            .required('Pole wymagane')
    });

    return (
            <Formik
                initialValues={formInputs}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    setValuesStepOne(values);
                    handleNextStep(values);
                }}
            >
                {() => {
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

                                <div className="add-training__buttons-container">
                                    <Button className="btn btn-primary align-self-end" type="submit">Dalej</Button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
    );
};

export default AddTrainingFormStepOne;