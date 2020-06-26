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
        console.log('fetch');
        fetchAllTrainings(token);
    }, [fetchAllTrainings, token]);

    if (trainings === null) {
        return <Spinner/>;
    }

    if (error) {
        return <h1>Coś poszło nie tak!</h1>
    }

    if (trainings.length === 0) {
        return <h1>Brak treningów w historii, dodaj trening!</h1>
    }

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