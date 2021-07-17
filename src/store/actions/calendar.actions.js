import * as actionTypes from '../action-types';
import moment from 'moment';
import { createCalendarStructure, generateNewMonthDate } from '../../pages/diary/helpers';

export const setPickedDate = (dateData) => ({type: actionTypes.SET_PICKED_DATE, payload: dateData});
export const setPickedMonth = (month) => ({type: actionTypes.SET_PICKED_MONTH, payload: month});
export const setDaysOfWeek = (days) => ({type: actionTypes.SET_DAYS_OF_WEEK, payload: days});
export const setCalendarStructure = (structure) => ({type: actionTypes.SET_CALENDAR_STRUCTURE, payload: structure});
export const wrapCalendarWithTrainings = (trainings) => ({type: actionTypes.WRAP_CALENDAR_WITH_TRAININGS, payload: trainings});

export const getCalendarInitialData = (today) => dispatch => {
  const structure = createCalendarStructure(today);
  const daysOfWeek = moment.weekdays();
  const sunday = daysOfWeek.shift();

  dispatch(setDaysOfWeek([...daysOfWeek, sunday]));
  dispatch(setPickedMonth(today));
  dispatch(setCalendarStructure(structure));
};

export const changeMonth = (direction, calendarStructure, pickedMonth) => dispatch => {
  const newMonth = generateNewMonthDate(direction, pickedMonth);
  const monthExist = calendarStructure.some((item) => item.month === newMonth);

  if (!monthExist) {
    const structure = createCalendarStructure(newMonth);

    dispatch(setCalendarStructure(structure));
  }

  dispatch(setPickedMonth(newMonth));
};
