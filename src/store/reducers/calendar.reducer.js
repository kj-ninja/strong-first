import * as actionTypes from '../action-types';
import {mapTrainingsToCalendar, getFirstDayOfMonth} from "../../pages/diary/helpers";

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
      const {date, dayIndex} = action.payload;
      let monthDate = getFirstDayOfMonth(date);
      const monthIndex = state.calendarStructure.findIndex((item) => item.month === monthDate);
      const pickedDateExist = state.pickedDate.length;
      const copiedCalendarStructure = state.calendarStructure.slice();

      if (pickedDateExist) {
        monthDate = getFirstDayOfMonth(state.pickedDate);
        const oldMonthIndex = state.calendarStructure.findIndex((item) => item.month === monthDate);
        const oldDateIndex = state.calendarStructure[oldMonthIndex].dates
          .findIndex((day) => day.date === state.pickedDate);

        copiedCalendarStructure[oldMonthIndex].dates[oldDateIndex].isPicked = false
        copiedCalendarStructure[monthIndex].dates[dayIndex].isPicked = true;

        return {
          ...state,
          pickedDate: date,
          calendarStructure: copiedCalendarStructure,
        };
      }

      copiedCalendarStructure[monthIndex].dates[dayIndex].isPicked = true;

      return {
        ...state,
        pickedDate: date,
        calendarStructure: copiedCalendarStructure,
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
    case actionTypes.SET_PICKED_TRAININGS:
      return {
        ...state,
        pickedTrainings: action.payload,
      }
    case actionTypes.DELETE_TRAINING: {
      const {date, id} = action.payload;
      let monthDate = getFirstDayOfMonth(date);
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
      };
    }
    default:
      return state;
  }
};

export default calendarReducer;
