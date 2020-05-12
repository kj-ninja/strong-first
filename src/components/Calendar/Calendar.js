import React, {useState} from 'react';
import './Calendar.scss';
import {createDaysInMonth, wrapTrainingsWithDate} from '../../functions/calendar';

const Calendar = ({trainings, setTrainingToShow}) => {
    const [actualDate] = useState(new Date("2020-03-01"));
    const wrappedTrainings = wrapTrainingsWithDate(trainings);
    const weeksInMonth = createDaysInMonth(actualDate, wrappedTrainings);

    const getTrainingById = id => {
        trainings.forEach(training => {
            if (training.id === id) {
                setTrainingToShow(training);
            }
        })
    };

    const generateRow = (week) => {
        return (
            <tr>
                {week.map(day => {
                    if (day.monthNumber !== actualDate.getMonth()) {
                        return <td>
                            <div className="calendar__day--notActual">{day.dayNumber}</div>
                        </td>
                    }
                    if (day.element === null) {
                        return <td>
                            <div className="calendar__day">{day.dayNumber}</div>
                        </td>
                    } else {
                        return <td>
                            <div className="calendar__day" onClick={() => getTrainingById(day.element.id)}>
                                {day.dayNumber} <br/>
                                <i className="fas fa-dumbbell"/>
                            </div>
                        </td>
                    }
                })}
            </tr>
        )
    };

    return (
        <table className="calendar">
            <thead className="calendar__days">
            <tr>
                <th>PN</th>
                <th>WT</th>
                <th>ŚR</th>
                <th>CZ</th>
                <th>PT</th>
                <th>SB</th>
                <th>ND</th>
            </tr>
            </thead>
            <tbody>
            {weeksInMonth.map(week => generateRow(week))}
            </tbody>
        </table>
    );
};

export default Calendar;