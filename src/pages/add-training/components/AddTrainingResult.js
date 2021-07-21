import React from 'react';
import {connect} from 'react-redux';
import {addTraining, editTraining} from "../../../store/actions/calendar-trainings.actions";
import {getRepsView} from "../../../utils/getRepsView";
import {trainingSummaryView} from "../../../utils/trainingSummaryView";
import Button from "../../../components/ui/button/Button";
import '../AddTraining.scss';

const AddTrainingResult = (props) => {
  const {
    training,
    isTrainingEdit,
    addTraining,
    editTraining,
    history,
  } = props;

  const handleAddTraining = () => {
    addTraining(training);
    // TODO: do wywalenia timeouty zamiast tego spinner i redirect
    setTimeout(() => {
      history.push('/diary')
    }, 1500);
  };

  const handleEditTraining = () => {
    console.log(training);
    editTraining(training);
    // TODO: do wywalenia timeouty zamiast tego spinner i redirect
    setTimeout(() => {
      history.push('/diary')
    }, 1500);
  };

  const exercisesView = trainingSummaryView(training);

  return (
    <>
      <div className="add-training__overlay"/>
      <div className="add-training__background"/>
      <div className="add-training__result-container">
        <h2 className="add-training__result-title">
          <span>Nazwa treningu:</span> {training.name}
        </h2>

        <p><span>Data treningu:</span> {training.date}</p>
        <p><span>Czas trwania treningu:</span> {training.duration}</p>
        <p><span>Ilość spalonych kalorii:</span> {training.kcal}</p>
        <p><span>Notatki:</span> {training.note}</p>

        <h3>Cwiczenia:</h3>

        <ul className="add-training__result-list">
          {exercisesView.map(element => (
            <li key={element.id} className="add-training__result-list--element">
                <span className="add-training__result-list--element-name">
                  {element.name}:
                </span>

              {getRepsView(element).map((rep, i) => (
                <span key={i} className="add-training__result-list--element-rep">
                  {rep}
                </span>
              ))}
            </li>
          ))}
        </ul>

        <div className="add-training__buttons">
          <Button type="button" color="blue" clicked={() => history.goBack()}>Wstecz</Button>
          {
            isTrainingEdit ?
              <Button type="button" color="red" clicked={handleEditTraining}>Zapisz zmiany</Button> :
              <Button type="button" color="red" clicked={handleAddTraining}>Zapisz trening</Button>
          }
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    training: state.addTrainingForm.training,
    token: state.auth.token,
    isTrainingEdit: state.addTrainingForm.isTrainingEdit,
  }
};

export default connect(mapStateToProps, {addTraining, editTraining})(AddTrainingResult);
