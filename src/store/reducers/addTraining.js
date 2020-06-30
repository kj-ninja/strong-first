import * as actionTypes from '../actions/actionTypes';

const initialState = {
    training: {
        date: new Date().toISOString().substr(0, 10),
        name: '',
        duration: '',
        kcal: '',
        note: '',
        sets: []
    }
}

const addTraining = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRAINING_STEP_1:
            return {
                ...state,
                training: action.training
            }
        default:
            return state;
    }
};

export default addTraining;