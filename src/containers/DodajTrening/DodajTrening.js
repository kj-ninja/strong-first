import React, {useState} from 'react';
import '../AddTraining/AddTraining.scss';
import AddTrainingFormStepOne from "../AddTraining/AddTrainingForm/AddTrainingFormStepOne";
import AddTrainingFormStepTwo from "../AddTraining/AddTrainingForm/AddTrainingFormStepTwo";

const DodajTrening = () => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [valuesStepOne, setValuesStepOne] = useState();

    console.log('DodajTrening', valuesStepOne);

    const handleNextStep = (values) => {
        console.log('handler', values);
        setValuesStepOne(values);
        setStepOne(false);
        setStepTwo(true);
    };

    const handlePrevStep = () => {
        setStepOne(true);
        setStepTwo(false);
    };

    return (
        <>
            {stepOne ? <AddTrainingFormStepOne nextStep={handleNextStep}/> : null}
            {stepTwo ? <AddTrainingFormStepTwo prevStep={handlePrevStep}/> : null}
        </>

    );
};

export default DodajTrening;