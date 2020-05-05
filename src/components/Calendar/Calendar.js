import React, {useEffect, useState} from 'react';
import {
    getDayOfTheWeekOfFirstDayInMonth,
    changeDayOfWeekFromEnglishToPolishSystem,
    createDay,
    createDaysInMonth,
    formatDate,
    getFirstMondayInCalendar,
    wrapTrainingsWithDate
} from '../../functions/calendar';

const Calendar = ({trainings}) => {
    const [actualDate, setActualDate] = useState(new Date("2020-03-01"));
    // const [trainings, setTrainings] = useState(trainingsFromApi);

    useEffect(()=>{}, []);

    const wrappedTrainings = wrapTrainingsWithDate(trainings);
    const weeksInMonth = createDaysInMonth(actualDate, wrappedTrainings);

    const generateRow = (week) => {
        console.log(week);
        return (
            <tr>
                {week.map(day=>{
                    if (day.element === null) {
                        return <td><div>{day.dayNumber}</div></td>
                    } else {
                        return <td><div><i>X</i>{day.dayNumber}</div></td>
                    }
                })}
            </tr>
        )
    };

    return (
        <div>
            <table>
                <thead>

                </thead>
                <tbody>
                    {weeksInMonth.map(week => generateRow(week))}
                </tbody>
            </table>
        </div>
    );
};
// const wrappedTrainings = wrapTrainingsWithDate(trainingsFromApi);
// console.log(wrappedTrainings);
// const daysIntMonth = createDaysInMonth(new Date(), wrappedTrainings);
// console.log(daysIntMonth);
// const calendar = generateTable(daysIntMonth);
// document.getElementById('calendar').innerHTML = calendar;

export default Calendar;