import React, {useEffect, useState} from 'react';
import './Calendar.scss';
import {createDaysInMonth, wrapTrainingsWithDate} from '../../functions/calendar';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = ({trainings, setTrainingToShow}) => {
    const [actualDate, setActualDate] = useState(new Date());
    const wrappedTrainings = wrapTrainingsWithDate(trainings);
    const weeksInMonth = createDaysInMonth(actualDate, wrappedTrainings);

    useEffect(()=>{
        document.addEventListener('keydown', handleKeyArrow);
        console.log('zamontowano event');

        return () => {
            document.removeEventListener('keydown', handleKeyArrow);
        }
    });

    const handleKeyArrow = (e) => {
        if (e.keyCode === 37) {
            handlePreviousMonth();
        }
        if (e.keyCode === 39)
            handleNextMonth();
    };

    const handlePreviousMonth = () => {
        setActualDate(new Date(actualDate.setMonth(actualDate.getMonth() - 1)));
    };
    const handleNextMonth = () => {
        setActualDate(new Date(actualDate.setMonth(actualDate.getMonth() + 1)));
    };

    const getTrainingById = id => {
        trainings.forEach(training => {
            if (training.id === id) {
                setTrainingToShow(training);
            }
        })
    };

    const generateRow = (week, i) => {
        return (
            <tr key={i}>
                {week.map(day => {
                    if (day.monthNumber !== actualDate.getMonth()) {
                        return <td key={day.dayNumber + day.monthNumber + 100}>
                            <div className="calendar__day calendar__day--notActual">{day.dayNumber}</div>
                        </td>
                    }
                    if (day.element === null) {
                        return <td key={day.dayNumber + day.monthNumber + 200}>
                            <div className="calendar__day">{day.dayNumber}</div>
                        </td>
                    } else {
                        return <td key={day.dayNumber + day.monthNumber + 300}>
                            <div className="calendar__day calendar__training-day" onClick={() => getTrainingById(day.element.id)}>
                                {day.dayNumber} <br/>
                                <i className="fas fa-dumbbell"/>
                            </div>
                        </td>
                    }
                })}
            </tr>
        )
    };

    console.log('renderuje Calendar');
    return (

        <div className="calendar__container">
            <div className="calendar__header">
                <span className="calendar__month">{months[actualDate.getMonth()]}</span>
                <span className="calendar__year">{actualDate.getFullYear()}</span>
            </div>
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
                <tbody className="calendar__body">
                {weeksInMonth.map((week, i) => generateRow(week, i))}
                </tbody>
            </table>
            <div className="calendar__arrow calendar__arrow--left">
                <i className="fas fa-angle-left" onClick={handlePreviousMonth}/>
            </div>
            <div className="calendar__arrow calendar__arrow--right" onClick={handleNextMonth}>
                <i className="fas fa-angle-right"/>
            </div>
        </div>
    );
};

export default Calendar;