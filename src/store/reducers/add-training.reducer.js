import * as actionTypes from '../action-types';

const initialState = {
  training: {
    date: new Date().toISOString().substr(0, 10),
    name: '',
    duration: '',
    kcal: '',
    note: '',
    sets: []
  },
  isTrainingEdit: false,
}

const addTrainingFormReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.ADD_TRAINING_TO_EDIT_FORM:
      return {
        ...state,
        training: action.payload,
        isTrainingEdit: true
      }

    case actionTypes.SET_ADD_TRAINING_FORM_EDIT_OPTION:
      return {
        ...state,
        isTrainingEdit: action.payload,
      }
    case actionTypes.RESET_ADD_TRAINING_FORM:
      return {
        ...state,
        training: initialState.training,
        isTrainingEdit: initialState.isTrainingEdit,
      }
    default:
      return state;
  }
};

export default addTrainingFormReducer;
