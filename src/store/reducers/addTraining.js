import * as actionTypes from '../actions/actionTypes';

const initialState = {
    training: {
        date: '',
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
                training: {
                    ...state.training,
                    ...action.payload
                }
            };
        case actionTypes.ADD_SET:
            return {
                ...state,
                training: {
                    ...state.training,
                    sets: state.training.sets.concat(action.payload)
                }
            }
        case actionTypes.DELETE_SET:
            return {
                ...state,
                training: {
                    ...state.training,
                    sets: state.training.sets.filter((set, index) => index !== action.payload)
                }
            }
        default:
            return state;
    }
};

export default addTraining;