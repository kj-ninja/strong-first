import React, {useState} from 'react';
import {createDaysInMonth, wrapTrainingsWithDate} from '../../functions/calendar';

const Calendar = ({trainings,setTrainingToShow}) => {
    const [actualDate] = useState(new Date("2020-03-01"));
    const wrappedTrainings = wrapTrainingsWithDate(trainings);
    const weeksInMonth = createDaysInMonth(actualDate, wrappedTrainings);

    const getTrainingById = id => {
        trainings.forEach(training=>{
            if (training.id === id) {
                setTrainingToShow(training);
            }
        })
    };

    const generateRow = (week) => {
        return (
            <tr>
                {week.map(day=>{
                    if (day.element === null) {
                        return <td><div>{day.dayNumber}</div></td>
                    } else {
                        return <td><div onClick={()=>getTrainingById(day.element.id)}><i>X</i>{day.dayNumber}</div></td>
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

export default Calendar;