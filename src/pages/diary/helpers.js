import moment from 'moment';

export const createCalendarStructure = (today) => {

  const calendarBody = Array.from({length: 42});
  const startOfMonth = moment(today).startOf('month').format('YYYY-MM-DD');
  const actMonthDays = generateMonthDates(today);
  const firstDayIndex = moment(startOfMonth).day() === 0 ? 6 : moment(startOfMonth).day() - 1;

  const prevMonthDate = moment(today).subtract(1, 'months').format('YYYY-MM-DD');
  const prevMonthDays = generateMonthDates(prevMonthDate);
  prevMonthDays.splice(0, prevMonthDays.length - firstDayIndex);

  const nextMonthDate = moment(today).add(1, 'months').format('YYYY-MM-DD');
  let nextMonthDays = generateMonthDates(nextMonthDate);
  nextMonthDays = nextMonthDays.slice(0, 42 - (firstDayIndex + actMonthDays.length));

  const allDates = [
    ...prevMonthDays,
    ...actMonthDays,
    ...nextMonthDays,
  ];

  calendarBody.forEach((day, index) => {
    calendarBody[index] = {
      date: allDates[index],
      isPicked: false,
      isDiffMonth: moment(today).format('MM') !== moment(allDates[index]).format('MM'),
      trainings: [],
    };
  });

  return {
    month: startOfMonth,
    dates: calendarBody,
  };
};

export const generateMonthDates = (date) => {
  const monthDates = [];
  const startDate = moment(date).startOf('month').clone();
  const endDate = moment(date).endOf('month');

  while (startDate.isSameOrBefore(endDate)) {
    monthDates.push(startDate.format('YYYY-MM-DD'));
    startDate.add(1, 'days');
  }

  return monthDates;
};

export const generateNewMonthDate = (direction, pickedMonth) => {
  const startDate = moment(pickedMonth).startOf('month').clone();
  let newMonth;

  switch (direction) {
    case 'previous':
      newMonth = moment(startDate).subtract(1, 'months').format('YYYY-MM-DD');
      break;
    default:
      newMonth = moment(startDate).add(1, 'months').format('YYYY-MM-DD');
  }

  return newMonth;
};

export const getMonthData = (calendarStructure, pickedMonth) => {
  if (calendarStructure.length) {
    const formattedMonth = moment(pickedMonth).startOf('month').format('YYYY-MM-DD');
    return calendarStructure.find((item) => item.month === formattedMonth).dates;
  }
  return [];
};

export const mapTrainingsToCalendar = (calendar, trainings) => {
  const copiedCalendar = {...calendar};

  trainings.forEach((training) => {
    copiedCalendar.dates.forEach(day => {
      if (day.date === training.date) {
        day.trainings.push(training);
      }
    });
  });

  return copiedCalendar;
};

export const getDay = (value) => moment(value).format('DD');
export const cutWeekDay = (value) => value.substring(0, 3);
export const isToday = (date) => date === moment().format('YYYY-MM-DD');
export const isNormalDay = (day) => !day.isDiffMonth && !day.isPicked;
export const getMonth = (value) => moment(value).format('MMMM YYYY');
