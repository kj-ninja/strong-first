import * as actionTypes from './actionTypes';

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

export const addTrainingToStore = (training) => {
    return {
        type: actionTypes.ADD_TRAINING_TO_STORE,
        payload: training
    }
}

export const clearForm = () => ({type: actionTypes.CLEAR_ADD_TRAINING_FORM})