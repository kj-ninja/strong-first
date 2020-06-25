import React, {useEffect} from 'react';
import './Diary.scss';
import {connect} from 'react-redux';
import {fetchTrainings, trainingToShowHandler} from "../../store/actions/trainings";
import TrainingSummary from "./TrainingSummary/TrainingSummary";
import Calendar from "./Calendar/Calendar";
import Spinner from "../../components/UI/Spinner/Spinner";

const Diary = (props) => {
    const {fetchTrainings, token, trainingToShow, trainings, trainingToShowHandler} = props;

    useEffect(() => {
        console.log('fetch');
        fetchTrainings(token);
    }, [fetchTrainings, token]);

    if (trainings.length === 0) {
        return <Spinner/>;
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
        trainingToShow: state.trainings.trainingToShow
    }
};

export default connect(mapStateToProps, {fetchTrainings, trainingToShowHandler})(Diary);