import * as actionTypes from './actionTypes';
import axios from "axios";
import {trainingsClearError} from './trainings';

export const addTrainingStepOne = (data) => {
    return {
        type: actionTypes.ADD_TRAINING_STEP_1,
        payload: data
    }
}

export const addSet = (set) => {
    return {
        type: actionTypes.ADD_SET,
        payload: set
    }
};

export const deleteSet = (index) => {
    return {
        type: actionTypes.DELETE_SET,
        payload: index
    }
};

export const addTrainingStart= () => ({type: actionTypes.ADD_TRAINING_START});
export const addTrainingFail = (error) => ({type: actionTypes.ADD_TRAINING_FAIL, error: error});

export const addTrainingToStore = (training) => {
    return {
        type: actionTypes.ADD_TRAINING_TO_STORE,
        payload: training
    }
}

export const addTrainingToApi = (token, training) => {
    return dispatch => {
        dispatch(addTrainingStart());
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
                dispatch(addTrainingFail(error));
            });
    };
};

export const editTraining = (info) => ({type: actionTypes.EDIT_TRAINING, payload: info});

export const clearForm = () => ({type: actionTypes.CLEAR_ADD_TRAINING_FORM})