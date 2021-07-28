import * as actionTypes from '../action-types';
import moment from 'moment';
import { initCalendar } from "./calendar-trainings.actions";
import { createCalendarStructure, getFirstDayOfNextMonth, getFirstDayOfPreviousMonth } from '../../pages/diary/helpers';

export const setPickedDate = (date) => ({type: actionTypes.SET_PICKED_DATE, payload: date});
export const setPickedMonth = (month) => ({type: actionTypes.SET_PICKED_MONTH, payload: month});
export const setDaysOfWeek = (days) => ({type: actionTypes.SET_DAYS_OF_WEEK, payload: days});
export const setCalendarStructure = (structure) => ({type: actionTypes.SET_CALENDAR_STRUCTURE, payload: structure});
export const mapTrainingsToCalendar = (trainings) => ({type: actionTypes.MAP_TRAININGS_TO_CALENDAR, payload: trainings});

export const getCalendarInitialData = (date) => dispatch => {
  const structure = createCalendarStructure(date);
  const daysOfWeek = moment.weekdays();
  const sunday = daysOfWeek.shift();

  dispatch(setDaysOfWeek([...daysOfWeek, sunday]));
  dispatch(setPickedMonth(date));
  dispatch(setCalendarStructure(structure));
};

export const changeMonth = (direction, calendarStructure, pickedMonth) => async dispatch => {
  const month = direction === 'previous' ? getFirstDayOfPreviousMonth(pickedMonth) : getFirstDayOfNextMonth(pickedMonth);
  const monthExist = calendarStructure.some((item) => item.month === month);

  if (!monthExist) {
    dispatch(initCalendar(month));
  } else {
    dispatch(setPickedMonth(month));
  }
};
