import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trainings: [],
    error: false,
    loading: true,
    trainingToShow: null
}

const trainingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRAININGS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_TRAININGS_SUCCESS:
            return {
                ...state,
                trainingToShow: action.trainings[action.trainings.length - 1],
                trainings: action.trainings,
                loading: false
            }
        case actionTypes.FETCH_TRAININGS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
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
        case actionTypes.EDIT_TRAINING_IN_STORE:
            const editTrainings = state.trainings.filter(training => training.id !== action.payload.id);
            return {
                ...state,
                trainings: editTrainings.concat(action.payload)
            }
        case actionTypes.DELETE_TRAINING_FROM_STORE:
            const newTrainings = state.trainings.filter(training => training.id !== action.payload);
            return {
                ...state,
                trainingToShow: null,
                trainings: newTrainings
            }
        default:
            return state;
    }
};

export default trainingsReducer;