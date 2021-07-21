import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {deleteTraining} from "../../../store/actions/calendar-trainings.actions";
import {getRepsView} from "../../../utils/getRepsView";
import {timeConvert} from '../../../utils/timeConvert';
import {trainingSummaryView} from '../../../utils/trainingSummaryView';
import './TrainingsSummary.scss';

const TrainingsSummary = (props) => {
  const {pickedTrainings, deleteTraining} = props;
  const exercisesViews = pickedTrainings.map(pickedTraining => trainingSummaryView(pickedTraining));

  const handleEditTraining = (training) => {
    console.log(training);

    // props.isEditTraining(true);
    // addTrainingEditForm(trainingToEdit);
    // props.history.push('/add-training');
  };

  const handleDeleteTraining = async (training) => {
    deleteTraining(training);
  };

  const generateExercisesListView = (training) => (
    <ul className="training-summary__list list-group">
      {training.map(element => (
        <li key={element.id} className="training-summary__exercise list-group-item">
          <span className="training-summary__exercise-name">
            {element.name.toUpperCase()}:
          </span>

          {getRepsView(element).map((rep, i) => (
            <span key={i} className="training-summary__exercise-rep">
              {rep}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );

  let trainingsViews = pickedTrainings.map((pickedTraining, index) => (
    <div className={"training-summary"} key={index}>
      <i className="far fa-edit edit" onClick={()=>handleEditTraining(pickedTraining)}/>
      <i className="far fa-trash-alt trash" onClick={()=>handleDeleteTraining(pickedTraining)}/>

      <p className="training-summary__element">
        <span>Data:</span> {pickedTraining.date}
      </p>

      <p className="training-summary__element">
        <span>Nazwa:</span> {pickedTraining.name}
      </p>

      <p className="training-summary__element">
        <span>Czas:</span> {timeConvert(pickedTraining.duration)}
      </p>

      <p className="training-summary__element">
        <span>Spalone kalorie:</span> {pickedTraining.kcal}
      </p>

      <p className="training-summary__element">
        <span>Łączna ilość serii:</span> {pickedTraining.sets.length}
      </p>

      {generateExercisesListView(exercisesViews[index])}

      <div className="training-summary__notes">
        <p>Notatki:</p>
        {pickedTraining.note.toLowerCase()}
      </div>
    </div>
  ));

  return (
    <div className="training-summary__container">
      {trainingsViews}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pickedTrainings: state.calendar.pickedTrainings,
    token: state.auth.token
  }
};

export default connect(mapStateToProps, {deleteTraining})(withRouter(TrainingsSummary));
