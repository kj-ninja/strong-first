import React, {useState} from 'react';

const getNumberOfDaysInMonth = (date) => {
    const nextMonth = date.getMonth() + 1;
    // if you pass 0 as day, it shows a last day of last month so we know how many days was in last month
    return new Date(date.getFullYear(), nextMonth, 0).getDate();
};
const changeDayOfWeekFromEnglishToPolishSystem = (dayOfWeek) => {
    // change day from english system to polish where sunday is 0 not 6
    if (dayOfWeek === 0) {
        dayOfWeek = 6;
    } else {
        dayOfWeek--;
    }
    return dayOfWeek;
};
const getDayOfTheWeekOfFirstDayInMonth = (date) => {
    // days number from 0-6 where 0 is sunday
    const firstDayInCurrentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    return changeDayOfWeekFromEnglishToPolishSystem(firstDayInCurrentDate.getDay());
};

const Calendar = ({trainings, setTrainingToShow}) => {
    const [date, setDate] = useState(new Date());
    const [actualMonthDays, setActualMonthDays] = useState(getNumberOfDaysInMonth(date));
    const [dayOfWeekOfFirstDayInMonth, setDayOfWeekOfFirstDayInMonth] = useState(getDayOfTheWeekOfFirstDayInMonth(date));

    const generateDaysInMonth = () => {
        const month = getNumberOfDaysInMonth(date);
        for (let i = 0; i < 6; i++) {
            let week = [];
            for (let j = 0; j < 7; j++) {
                week.push({

                })
            }
        }

    };

    const generateCalendarTableRow = (week) => {

    };

    const generateCalendar = () => {
        const actualMonthDays = getNumberOfDaysInMonth(date);

    };



    let dayOfWeek = dayOfWeekOfFirstDayInMonth;

    return (
        <div>
            {calendar}
        </div>
    );
};
export default Calendar;