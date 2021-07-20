import React from 'react';
import {connect} from 'react-redux';
import {setPickedDate} from "../../../store/actions/calendar.actions";
import {setPickedTrainings} from "../../../store/actions/calendar-trainings.actions";
import {getDay, cutWeekDay, isToday, isNormalDay, getMonthData} from "../helpers";
import bindClassesDynamically from "../../../utils/classBinder";
import './Calendar.scss';

const Calendar = (props) => {
  const {setPickedDate, pickedDate, daysOfWeek, calendarStructure, pickedMonth, setPickedTrainings} = props;

  const handleDatePick = (day, dayIndex) => {
    const isDatePicked = pickedDate === day.date;
    if (!isDatePicked && !day.isDiffMonth) {
      setPickedDate({date: day.date, dayIndex});
    }

    if (day.trainings.length) {
      console.log('Yo kliknales w dzien z treningami');
      console.log('Dzien: ', day);
      console.log('Treningi: ', day.trainings);
      setPickedTrainings(day.trainings);
    } else {
      setPickedTrainings([]);
    }
  };

  return (
    <div className="calendar">

      {daysOfWeek.map((name, index) => (
        <div className="calendar__week-days" key={index}>
          {cutWeekDay(name)}
        </div>
      ))}

      {getMonthData(calendarStructure, pickedMonth).map((day, index) => (
        <div onClick={() => handleDatePick(day, index)}
             key={day.date}
             className={
               bindClassesDynamically({
                 'calendar__item--isToday': isToday(day.date),
                 'calendar__item--isPicked': day.isPicked,
                 'calendar__item--diffMonth': day.isDiffMonth,
                 'calendar__item--hoover': isNormalDay(day),
                 'calendar__item--exist': day.trainings.length,
               }, 'calendar__item')
             }>

          <div className="calendar__item__bottom">
              <span className="item-bottom__day">
                {getDay(day.date)}
              </span>

            {isToday(day.date) ? (
              <span className="item-bottom__today"/>
            ) : null}

            {isNormalDay(day) ? (
              <div className="item-bottom__add"/>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  calendarStructure: state.calendar.calendarStructure,
  pickedDate: state.calendar.pickedDate,
  pickedMonth: state.calendar.pickedMonth,
  daysOfWeek: state.calendar.daysOfWeek,
});

export default connect(mapStateToProps, {setPickedDate, setPickedTrainings})(Calendar);
