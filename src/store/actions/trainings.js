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
                dispatch(fetchTrainingsSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(fetchTrainingsFail(error.response.status));
            })
    };
};

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
            })
            .catch(error => {
                dispatch(fetchTrainingsFail(error));
            });
    };
};

export const editTrainingInStore = (training) => {
    return {
        type: actionTypes.EDIT_TRAINING_IN_STORE,
        payload: training
    }
};

export const editTrainingInApi = (token, training, id) => {
    return dispatch => {
        dispatch(fetchTrainingsStart());
        axios.post('https://ironman.coderaf.com/training/' + id, training, {
            headers: {
                'Access-Token': token
            },
        })
            .then(function (res) {
                dispatch(trainingsClearError());
                dispatch(editTrainingInStore(training));
            })
            .catch(error => {
                dispatch(fetchTrainingsFail(error));
            });
    };
};

export const deleteTrainingFromStore = (id) => {
    return {
        type: actionTypes.DELETE_TRAINING_FROM_STORE,
        payload: id
    }
};

export const deleteTrainingFromApi = (id, token) => {
    return dispatch => {
        dispatch(fetchTrainingsStart());
        axios.delete('https://ironman.coderaf.com/training/' + id, {
            headers: {
                'Access-Token': token
            },
        })
            .then(function (res) {
                dispatch(trainingsClearError());
                dispatch(deleteTrainingFromStore(id));
            })
            .catch(error => {
                dispatch(fetchTrainingsFail(error));
            });
    };
};
