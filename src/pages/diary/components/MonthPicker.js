import React, {useState} from 'react';
import {connect} from 'react-redux';
import {changeMonth} from '../../../store/actions/calendar.actions';
import {getMonth} from "../helpers";
import './MonthPicker.scss';

const MonthPicker = (props) => {
  const [monthBar, setMonthBar] = useState(true);
  const {calendarStructure, pickedMonth, changeMonth} = props;

  const handleMonthChange = (direction) => {
    changeMonth(direction, calendarStructure, pickedMonth);
  };

  const handleCLickMonth = () => {
    setMonthBar(false);
  };

  return (
    <div className="month-picker">

      <div className="month-picker__controls">

        <i className="fas fa-caret-left" onClick={() => handleMonthChange('previous')}/>

        <span onClick={handleCLickMonth} className="month-picker__controls--month">
          {getMonth(pickedMonth)}
        </span>

        <i className="fas fa-caret-right" onClick={() => handleMonthChange('next')}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  calendarStructure: state.calendar.calendarStructure,
  pickedMonth: state.calendar.pickedMonth,
});

export default connect(mapStateToProps, {changeMonth})(MonthPicker);
