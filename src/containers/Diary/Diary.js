import React, {useEffect} from 'react';
import './Diary.scss';
import {connect} from 'react-redux';
import {fetchAllTrainings, trainingToShowHandler} from "../../store/actions/trainings";
import TrainingSummary from "./TrainingSummary/TrainingSummary";
import Calendar from "./Calendar/Calendar";
import Spinner from "../../components/UI/Spinner/Spinner";

const Diary = (props) => {
    const {fetchAllTrainings, token, trainingToShow, trainings, trainingToShowHandler, error} = props;

    useEffect(() => {
        fetchAllTrainings(token);
    }, [fetchAllTrainings, token]);

    if (error) {
        return <h1 style={{textAlign: 'center', marginTop: '70px', fontSize: '22px'}}>Coś poszło nie tak! lub brak treningów w historii,
            dodaj swój pierwszy trening!</h1>
    }

    if (trainings.length === 0) {
        return <Spinner/>;
    }

    //
    // if (trainings.length === 0) {
    //     return <h1>Brak treningów w historii, dodaj trening!</h1>
    // }

    return (
        <>
            <Calendar trainings={trainings} setTrainingToShow={trainingToShowHandler}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
        </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        trainings: state.trainings.trainings,
        trainingToShow: state.trainings.trainingToShow,
        error: state.trainings.error
    }
};

export default connect(mapStateToProps, {fetchAllTrainings, trainingToShowHandler})(Diary);