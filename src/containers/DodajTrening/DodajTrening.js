import React, {useState} from 'react';
import '../AddTraining/AddTraining.scss';
import {connect} from 'react-redux';
import {addTrainingToApi} from "../../store/actions/trainings";
import DodajTreningStepOne from "./DodajTreningStepOne";
import DodajTreningStepTwo from "./DodajTreningStepTwo";
import PodsumowanieTreningu from "./PodsumowanieTreningu";
import Spinner from "../../components/UI/Spinner/Spinner";

const DodajTrening = (props) => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [resultStep, setResultStep] = useState(false);
    const [valuesStepOne, setValuesStepOne] = useState();
    const [training, setTraining] = useState({});

    const handleStepOneTraining = (values) => {
        setValuesStepOne(values);
        setStepOne(false);
        setStepTwo(true);
        setResultStep(false);
    };
    const handleBackToStepOne = () => {
        setStepOne(true);
        setStepTwo(false);
        setResultStep(false);
    };

    const handleStepTwoTraining = (sets) => {
        const newTraining = {
            date: valuesStepOne.date,
            name: valuesStepOne.name,
            duration: +valuesStepOne.duration,
            kcal: +valuesStepOne.kcal,
            note: valuesStepOne.note,
            sets
        };
        setTraining(newTraining);
        setStepOne(false);
        setStepTwo(false);
        setResultStep(true);
    };

    const handleAddTraining = () => {
        props.addTrainingToApi(props.token, training);
        setTimeout(()=> {props.history.push('/diary')}, 1500);
    };

    return (
        <>
            {props.loading ? <Spinner/> :
            <>
                {stepOne ? <DodajTreningStepOne handleStepOneTraining={handleStepOneTraining}/> : null}
                {stepTwo ? <DodajTreningStepTwo prevStep={handleBackToStepOne} handleStepTwoTraining={handleStepTwoTraining} /> : null}
                {resultStep ? <PodsumowanieTreningu
                    training={training}
                    setTraining={setTraining}
                    backToStepOne={handleBackToStepOne}
                    addTraining={handleAddTraining}/> : null}
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