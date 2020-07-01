import * as actionTypes from './actionTypes';
import axios from "axios";

export const fetchTrainingsStart = () => ({type: actionTypes.FETCH_TRAININGS_START});
export const fetchTrainingsSuccess = (trainings) => ({type: actionTypes.FETCH_TRAININGS_SUCCESS, trainings: trainings});
export const fetchTrainingsFail = (error) => ({type: actionTypes.FETCH_TRAININGS_FAIL, error: error});
export const trainingToShowHandler = (training) => ({type: actionTypes.TRAINING_TO_SHOW_HANDLER, trainingToShow: training});
export const trainingsClearError = () => ({type: actionTypes.TRAININGS_CLEAR_ERROR});

export const fetchAllTrainings = (token) => {
    return dispatch => {
        dispatch(fetchTrainingsStart());
        axios.get(
            'https://ironman.coderaf.com/training',
            {
                'headers': {'Access-Token': token}
            })
            .then(function (response) {
                // handle success
                dispatch(trainingToShowHandler(response.data[response.data.length - 1]));
                dispatch(fetchTrainingsSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(fetchTrainingsFail(error.response.status));
            })
    };
};

export const addTrainingToStore = (training) => {
    return {
        type: actionTypes.ADD_TRAINING_TO_STORE,
        payload: training
    }
}

export const addTrainingToApi = (token, training) => {
    return dispatch => {
        dispatch(fetchTrainingsStart());
        axios.post('https://ironman.coderaf.com/training', training, {
            headers: {
                'Access-Token': token
            },
        })
            .then(function (res) {
                dispatch(trainingsClearError());
                dispatch(addTrainingToStore(training));
            })
            .catch(error => {
                dispatch(fetchTrainingsFail(error));
            });
    };
};