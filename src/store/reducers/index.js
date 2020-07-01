import {combineReducers} from "redux";
import authReducer from './auth';
import trainingsReducer from './trainings'
import addTrainingFormReducer from './addTrainingForm';

export default combineReducers({
    auth: authReducer,
    trainings: trainingsReducer,
    addTrainingForm: addTrainingFormReducer
});