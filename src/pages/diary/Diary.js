import React, {useEffect} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {initCalendar, deleteTraining} from "../../store/actions/calendar-trainings.actions";
import Spinner from "../../components/ui/spinner/Spinner";
import MonthPicker from "./components/MonthPicker";
import Calendar from "./components/Calendar";
import TrainingsSummary from "./components/TrainingsSummary";
import './Diary.scss';

const Diary = (props) => {
  const {
    initCalendar,
    error,
    calendarStructureLength,
    loading,
  } = props;
  const today = moment().format('YYYY-MM-DD');

  useEffect(() => {
    if (calendarStructureLength) return
    initCalendar(today);
  }, [initCalendar, today, calendarStructureLength]);

  if (error && error !== 404) {
    return (
      <h2 style={{textAlign: 'center', marginTop: '70px', fontSize: '24px'}}>
        Coś poszło nie tak!
      </h2>
    );
  }

  return (
    loading ? <Spinner/> :
      <>
        <MonthPicker/>
        <Calendar/>
        <TrainingsSummary/>
      </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    error: state.calendar.error,
    loading: state.calendar.loading,
    calendarStructureLength: state.calendar.calendarStructure.length,
  }
};

export default connect(mapStateToProps, {initCalendar, deleteTraining})(Diary);
