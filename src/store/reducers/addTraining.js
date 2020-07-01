import * as actionTypes from '../actions/actionTypes';

const initialState = {
    training: {
        date: new Date().toISOString().substr(0, 10),
        name: '',
        duration: '',
        kcal: '',
        note: '',
        sets: []
    },
    loading: false,
    error: false,
    isEdit: false
}

const addTrainingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRAINING_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.ADD_TRAINING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.ADD_TRAINING_STEP_1:
            return {
                ...state,
                training: {
                    ...state.training,
                    date: action.payload.date,
                    name: action.payload.name,
                    duration: +action.payload.duration,
                    kcal: +action.payload.kcal,
                    note: action.payload.note
                }
            };
        case actionTypes.ADD_TRAINING_TO_STORE:
            return {
                ...state,
                training: action.payload
            }
        case actionTypes.ADD_SET:
            return {
                ...state,
                training: {
                    ...state.training,
                    sets: state.training.sets.concat({
                        repetitions: +action.payload.repetitions,
                        time: +action.payload.time,
                        weight: +action.payload.weight,
                        exercise: action.payload.exercise
                    })
                }
            };
        case actionTypes.DELETE_SET:
            return {
                ...state,
                training: {
                    ...state.training,
                    sets: state.training.sets.filter((set, index) => index !== action.payload)
                }
            }
        case actionTypes.EDIT_TRAINING:
            return {
                ...state,
                isEdit: action.payload
            }
        case actionTypes.CLEAR_ADD_TRAINING_FORM:
            return {
                ...state,
                training: initialState.training
            }
        default:
            return state;
    }
};

export default addTrainingReducer;