import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTrainingToApi} from "../../store/actions/trainings";
import '../AddTraining/AddTraining.scss';
import DodajTreningStepOne from "./DodajTreningStepOne";
import DodajTreningStepTwo from "./DodajTreningStepTwo";
import Spinner from "../../components/UI/Spinner/Spinner";

const DodajTrening = (props) => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [valuesStepOne, setValuesStepOne] = useState();

    const handleNextStep = (values) => {
        setValuesStepOne(values);
        setStepOne(false);
        setStepTwo(true);
    };
    const handlePrevStep = () => {
        setStepOne(true);
        setStepTwo(false);
    };

    const handleAddTraining = (sets) => {
        const training = {
            date: valuesStepOne.date,
            name: valuesStepOne.name,
            duration: +valuesStepOne.duration,
            kcal: +valuesStepOne.kcal,
            note: valuesStepOne.note,
            sets
        };

        props.addTrainingToApi(props.token, training);
        setTimeout(()=> {props.history.push('/diary')}, 1500);
    };

    return (
        <>
            {props.loading ? <Spinner/> :
            <>
                {stepOne ? <DodajTreningStepOne nextStep={handleNextStep}/> : null}
                {stepTwo ? <DodajTreningStepTwo prevStep={handlePrevStep} addTraining={handleAddTraining} /> : null}
            </>}

        </>

    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.trainings.loading
    }
};

export default connect(mapStateToProps, {addTrainingToApi})(DodajTrening);