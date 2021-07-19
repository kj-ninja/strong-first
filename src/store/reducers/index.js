import {combineReducers} from "redux";
import authReducer from './auth.reducer';
import addTrainingFormReducer from './add-training.reducer';
import bigSixReducer from './big-six.reducer';
import calendarReducer from './calendar.reducer';

export default combineReducers({
    auth: authReducer,
    addTrainingForm: addTrainingFormReducer,
    bigSix: bigSixReducer,
    calendar: calendarReducer,
});
