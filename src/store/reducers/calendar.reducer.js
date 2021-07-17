import * as actionTypes from '../action-types';
import moment from "moment";
import { calendarWrapper } from "../../pages/diary/helpers";

const initialState = {
  pickedDate: '',
  pickedMonth: '',
  calendarStructure: [],
  daysOfWeek: [],
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
    case actionTypes.SET_PICKED_DATE:
      const {date, dayIndex} = action.payload;
      let monthDate = moment(date).startOf('month').format('YYYY-MM-DD');
      const monthIndex = state.calendarStructure.findIndex((item) => item.month === monthDate);
      const pickedDateExist = state.pickedDate.length;
      const copiedCalendar = [...state.calendarStructure];

      if (pickedDateExist) {
        monthDate = moment(state.pickedDate).startOf('month').format('YYYY-MM-DD');
        const oldMonthIndex = state.calendarStructure.findIndex((item) => item.month === monthDate);
        const oldDateIndex = state.calendarStructure[oldMonthIndex].dates
          .findIndex((day) => day.date === state.pickedDate);

        copiedCalendar[oldMonthIndex].dates[oldDateIndex].isPicked = false
        copiedCalendar[monthIndex].dates[dayIndex].isPicked = true;

        return {
          ...state,
          pickedDate: date,
          calendarStructure: copiedCalendar,
        };
      }

      copiedCalendar[monthIndex].dates[dayIndex].isPicked = true;

      return {
        ...state,
        pickedDate: date,
        calendarStructure: copiedCalendar,
      };
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
    case actionTypes.WRAP_CALENDAR_WITH_TRAININGS:
    const calendar = calendarWrapper(state.calendarStructure[0], action.payload);

    return {
      ...state,
      calendarStructure: [calendar],
    }
    default:
      return state;
  }
};

export default calendarReducer;

