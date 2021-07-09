import * as actionTypes from '../action-types';

export const addTrainingStepOne = (data) => {
    return {
        type: actionTypes.ADD_TRAINING_STEP_1,
        payload: data
    }
};

export const addTrainingEditForm = (training) => {
    return {
        type: actionTypes.ADD_TRAINING_EDIT_FORM,
        payload: training
    }
};

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

export const isEditTraining = (bool) => ({type: actionTypes.IS_EDIT_TRAINING, payload: bool})
export const clearForm = () => ({type: actionTypes.CLEAR_ADD_TRAINING_FORM})
