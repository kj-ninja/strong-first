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
        case actionTypes.ADD_TRAINING_TO_STORE:
            return {
                ...state,
                trainingToShow: action.payload,
                trainings: state.trainings.concat(action.payload)
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
            const newTrainings = state.trainings.filter(training => training.id !== action.payload.id);
            return {
                ...state,
                trainings: newTrainings
            }
        default:
            return state;
    }
};

export default trainingsReducer;