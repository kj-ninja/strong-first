import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import ReactSelect from "../../ReactSelect/ReactSelect";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import AddTrainingFormStepTwo from "./AddTrainingFormStepTwo";
import AddTrainingFormStepOne from './AddTrainingFormStepOne';

const formInputs = {
    date: new Date().toISOString().substr(0, 10), name: '', duration: '', kcal: '', notes: '', selectedRepetitions: '',
    selectedExerciseTime: '', selectedWeight: ''
};
const validationSchema = Yup.object({
    name: Yup.string()
        .max(50, 'Maksymalnie 50 znaków')
        .required('Pole wymagane'),
    duration: Yup.string()
        .required('Pole wymagane'),
    selectedRepetitions: Yup.string()
        .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą'),
    selectedExerciseTime: Yup.string()
        .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą'),
    selectedWeight: Yup.string()
        .matches(/^[0-9]+[0-9]*$/, 'Podana wartość musi być liczbą')
});

const AddTrainingForm = ({setSelectedExercise, handleAddTraining, handleAddSet}) => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);

    const handleStep = () => {
        setStepOne(false);
        setStepTwo(true);
    };

    return (
        <Formik
            initialValues={formInputs}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
                handleAddTraining(values);
            }}
        >
            {({values}) => {
                return (
                    <Form className="add-training__form">
                        <div className="add-training__container">

                            {stepOne ? <AddTrainingFormStepOne/> : null}
                            {stepTwo? <AddTrainingFormStepTwo setSelectedExercise={setSelectedExercise}/> : null}

                            <div className="add-training__buttons-container">
                                {stepOne ? <Button className="btn btn-primary" onClick={handleStep}>Dalej
                                </Button> : <><Button className="btn btn-primary" onClick={() => handleAddSet(values)}>Dodaj serię
                                </Button>
                                    <Button type="submit" className="btn btn-success pull-right">Zapisz trening
                                    </Button></>}

                            </div>

                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default AddTrainingForm;