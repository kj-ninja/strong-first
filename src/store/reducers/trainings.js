import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trainings: [],
    error: false,
    loading: true,
    trainingToShow: null,
    trainingAdded: false
}

const trainings = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRAININGS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_TRAININGS_SUCCESS:
            return {
                ...state,
                trainings: action.trainings,
                loading: false,
                trainingAdded: false
            }
        case actionTypes.FETCH_TRAININGS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case actionTypes.TRAINING_TO_SHOW_HANDLER:
            return {
                ...state,
                trainingToShow: action.trainingToShow
            }
        case actionTypes.TRAININGS_CLEAR_ERROR:
            return {
                ...state,
                error: false
            }
        case actionTypes.ADD_TRAINING:
            return {
                ...state,
                trainingToShow: action.training,
                trainings: state.trainings.concat(action.training),
                trainingAdded: true
            }
        case actionTypes.ADD_TRAINING_SUCCESS:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};

export default trainings;