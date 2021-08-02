import * as actionTypes from '../action-types';

export const addTrainingStepOne = (data) => {
    return {
        type: actionTypes.ADD_TRAINING_STEP_1,
        payload: data
    }
};

export const addTrainingToEditForm = (training) => ({type: actionTypes.ADD_TRAINING_TO_EDIT_FORM, payload: training});

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

export const setAddTrainingFormEditOption = (bool) => ({type: actionTypes.SET_ADD_TRAINING_FORM_EDIT_OPTION, payload: bool})
export const resetForm = () => ({type: actionTypes.RESET_ADD_TRAINING_FORM})
