import * as actionTypes from '../action-types';
import {
  mapTrainingsToCalendar,
  getFirstDayOfMonth,
  findCalendarMonthIndexByDate,
  unpickDate,
  findCalendarDayIndexByDate,
  addTrainingToCalendarDay,
} from "../../pages/diary/helpers";

const initialState = {
  pickedDate: '',
  pickedMonth: '',
  calendarStructure: [],
  daysOfWeek: [],
  error: false,
  loading: true,
  pickedTrainings: [],
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CALENDAR_STRUCTURE:
      return {
        ...state,
        calendarStructure: [
          ...state.calendarStructure,
          action.payload,
        ]
      };
    case actionTypes.SET_PICKED_DATE: {
      const monthDate = getFirstDayOfMonth(action.payload);
      const monthIndex = state.calendarStructure.findIndex((item) => item.month === monthDate);
      const dateIndex = state.calendarStructure[monthIndex].dates.findIndex((day) => day.date === action.payload);
      const copiedCalendarStructure = state.calendarStructure.slice();

      if (state.pickedDate.length) {
        unpickDate(state, copiedCalendarStructure);
        copiedCalendarStructure[monthIndex].dates[dateIndex].isPicked = true;

        return {
          ...state,
          pickedDate: action.payload,
          calendarStructure: copiedCalendarStructure,
          pickedTrainings: copiedCalendarStructure[monthIndex].dates[dateIndex].trainings,
        };
      }

      copiedCalendarStructure[monthIndex].dates[dateIndex].isPicked = true;

      return {
        ...state,
        pickedDate: action.payload,
        calendarStructure: copiedCalendarStructure,
        pickedTrainings: copiedCalendarStructure[monthIndex].dates[dateIndex].trainings,
      };
    }
    case actionTypes.SET_PICKED_MONTH:
      return {
        ...state,
        pickedMonth: action.payload,
      }
    case actionTypes.SET_DAYS_OF_WEEK:
      return {
        ...state,
        daysOfWeek: action.payload,
      };
    case actionTypes.MAP_TRAININGS_TO_CALENDAR: {
      const {trainings, calendarIndex} = action.payload;

      const calendarWithTrainings = mapTrainingsToCalendar(state.calendarStructure[calendarIndex], trainings);
      const copiedCalendarStructure = state.calendarStructure.slice();
      copiedCalendarStructure.splice(calendarIndex, 1, calendarWithTrainings);

      return {
        ...state,
        calendarStructure: copiedCalendarStructure,
      }
    }
    case actionTypes.GET_TRAININGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case actionTypes.GET_TRAININGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.DELETE_TRAINING: {
      const {date, id} = action.payload;
      const monthDate = getFirstDayOfMonth(date);
      const monthIndex = state.calendarStructure.findIndex((item) => item.month === monthDate);
      const copiedCalendarStructure = state.calendarStructure.slice();

      copiedCalendarStructure[monthIndex].dates.forEach(day => {
        if (day.date === date) {
          day.trainings = day.trainings.filter(training => training.id !== id)
        }
      });

      return {
        ...state,
        calendarStructure: copiedCalendarStructure,
        pickedTrainings: state.pickedTrainings.filter(pickedTraining => pickedTraining.id !== id)
      };
    }
    case actionTypes.EDIT_TRAINING: {
      const monthDate = getFirstDayOfMonth(action.payload.date);
      const monthIndex = state.calendarStructure.findIndex((item) => item.month === monthDate);
      const copiedCalendarStructure = state.calendarStructure.slice();

      copiedCalendarStructure[monthIndex].dates.forEach(day => {
        if (day.date === action.payload.date) {
          day.trainings = day.trainings.filter(element => element.id !== action.payload.id).concat(action.payload)
        }
      });

      return {
        ...state,
        calendarStructure: copiedCalendarStructure,
        pickedTrainings: state.pickedTrainings.map(pickedTraining => {
          if (pickedTraining.id === action.payload.id) return action.payload;
          else return pickedTraining;
        })
      };
    }
    case actionTypes.ADD_TRAINING_TO_CALENDAR: {
      const {training, date} = action.payload;
      const copiedCalendarStructure = state.calendarStructure.slice();

      if (date) {
        const monthIndex = findCalendarMonthIndexByDate(state.pickedMonth, state);
        const trainings = addTrainingToCalendarDay(copiedCalendarStructure[monthIndex], training);

        return {
          ...state,
          calendarStructure: copiedCalendarStructure,
          pickedTrainings: trainings,
        }
      }

      const monthIndex = findCalendarMonthIndexByDate(training.date, state);
      const dayIndex = findCalendarDayIndexByDate(training.date, copiedCalendarStructure[monthIndex]);
      copiedCalendarStructure[monthIndex].dates[dayIndex].isPicked = true;

      const trainings = addTrainingToCalendarDay(copiedCalendarStructure[monthIndex], training);

      if (state.pickedDate.length) {
        unpickDate(state, copiedCalendarStructure);
      }

      return {
        ...state,
        calendarStructure: copiedCalendarStructure,
        pickedTrainings: trainings,
        pickedDate: training.date,
      }
    }
    default:
      return state;
  }
};

export default calendarReducer;
