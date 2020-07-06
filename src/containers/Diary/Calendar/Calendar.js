import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import './Calendar.scss';
import {createDaysInMonth, wrapTrainingsWithDate} from '../../../functions/calendar';

const months = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];


const Calendar = ({trainings, setTrainingToShow, trainingToShow}) => {
    const [actualDate, setActualDate] = useState(new Date());
    const wrappedTrainings = wrapTrainingsWithDate(trainings);
    const weeksInMonth = createDaysInMonth(actualDate, wrappedTrainings);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyArrow);

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
        console.log(id);
        trainings.forEach(training => {
            if (training.id === id) {
                console.log(training);
                setTrainingToShow(training);
            }
        })
    };

    const isToday = (someDate) => {
        const today = new Date()
        return someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear()
    }

    const generateRow = (week, i) => {
        return (
            <tr key={i}>
                {week.map(day => {
                    const aktualnaData = new Date(new Date().getFullYear(), day.monthNumber, day.dayNumber);
                    let stylesForToday = 'stylesForToday';
                    if (!isToday(aktualnaData)) {
                        stylesForToday = '';
                    }
                    let stylesForFocus = '';

                    if (day.monthNumber !== actualDate.getMonth()) {
                        return <td key={day.dayNumber + day.monthNumber + 100} className={stylesForToday}>
                            <div className="calendar__day calendar__day--notActual">{day.dayNumber}</div>
                        </td>
                    }
                    if (day.elements === null) {
                        return <td key={day.dayNumber + day.monthNumber + 200} className={stylesForToday}>
                            <div className="calendar__day">{day.dayNumber}</div>
                        </td>
                    } else {
                        if (day.date === trainingToShow.date) {
                            stylesForFocus = ' focus'
                        } else {
                            stylesForFocus = '';
                        }
                        return (
                            <td key={day.dayNumber + day.monthNumber + 300} className={stylesForToday + stylesForFocus}>
                                <span style={{position: 'absolute'}}>{day.dayNumber}</span>
                                {day.elements.map((ele, i) => (
                                    <i key={i}
                                       className="calendar__training-day fas fa-dumbbell"
                                       onClick={() => getTrainingById(ele.id)}><br/>
                                    </i>
                                ))}
                            </td>
                        )
                    }
                })}
            </tr>
        )
    };

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

const mapStateToProps = state => {
    return {
        trainingToShow: state.trainings.trainingToShow
    }
};

export default connect(mapStateToProps)(Calendar);