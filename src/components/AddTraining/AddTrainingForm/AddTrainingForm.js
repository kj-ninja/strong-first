import React, {useState} from 'react';
import AddTrainingFormStepTwo from "./AddTrainingFormStepTwo";
import AddTrainingFormStepOne from './AddTrainingFormStepOne';

const AddTrainingForm = ({setSelectedExercise, handleAddTraining, handleAddSet, selectedExercise}) => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [valuesStepOne, setValuesStepOne] = useState();

    const handleNextStep = () => {
        setStepOne(false);
        setStepTwo(true);
    };

    return (
        <>
            {stepOne ? <AddTrainingFormStepOne handleNextStep={handleNextStep} setValuesStepOne={setValuesStepOne}/> : null}
            {stepTwo ? <AddTrainingFormStepTwo setSelectedExercise={setSelectedExercise}
                                               handleAddTraining={handleAddTraining}
                                               handleAddSet={handleAddSet}
                                               valuesStepOne={valuesStepOne}/> : null}
        </>
    );
};

export default AddTrainingForm;