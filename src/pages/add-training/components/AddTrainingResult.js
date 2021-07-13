import React from 'react';
import {connect} from 'react-redux';
import '../AddTraining.scss';
import {addTraining, editTrainingInApi} from "../../../store/actions/trainings.actions";
import Button from "../../../components/ui/button/Button";
import {getRepsView} from "../../../helpers/getRepsView";
import {trainingSummaryView} from "../../../helpers/trainingSummaryView";

const AddTrainingResult = (props) => {
  const {addTrainingForm, addTraining, editTrainingInApi} = props;

  const handleAddTraining = () => {
    let counter = 0;
    props.trainings.forEach(training => {
      if (training.date === addTrainingForm.date) {
        counter++;
      }
    })

    if (counter >= 2) {
      alert('Osiągnięto limit treningów w ciągu jednego dnia! Czas na relaks.' +
        'Zawsze możesz edytować jeden z treningów w sekcji dzienniczka.');
      setTimeout(() => {
        props.history.push('/diary')
      }, 500);
    } else {
      addTraining(addTrainingForm);
      setTimeout(() => {
        props.history.push('/diary')
      }, 1500);
    }
  };

  const handleEditTraining = () => {
    editTrainingInApi(props.token, addTrainingForm, addTrainingForm.id);
    setTimeout(() => {
      props.history.push('/diary')
    }, 1500);
  };

  const exerciseView = trainingSummaryView(addTrainingForm);

  return (
    <>
      <div className="add-training__overlay"/>
      <div className="add-training__background"/>
      <div className="add-training__result-container">
        <h2 className="add-training__result-title"><span>Nazwa treningu:</span> {addTrainingForm.name}</h2>
        <p><span>Data treningu:</span> {addTrainingForm.date}</p>
        <p><span>Czas trwania treningu:</span> {addTrainingForm.duration}</p>
        <p><span>Ilość spalonych kalorii:</span> {addTrainingForm.kcal}</p>
        <p><span>Notatki:</span> {addTrainingForm.note}</p>

        <h3>Cwiczenia:</h3>
        <ul className="add-training__result-list">
          {exerciseView.map(element => {
            return (
              <li key={element.id} className="add-training__result-list--element">
                                <span
                                  className="add-training__result-list--element-name">{element.name}:</span>
                {getRepsView(element).map((rep, i) => {
                  return (
                    <span key={i} className="add-training__result-list--element-rep">
                                    {rep}
                                </span>
                  )
                })}
              </li>
            )
          })}
        </ul>

        <div className="add-training__buttons">
          <Button type="button" color="blue" clicked={() => props.history.goBack()}>Wstecz</Button>
          {props.isEdit ?
            <Button type="button" color="red" clicked={handleEditTraining}>Zapisz zmiany</Button> :
            <Button type="button" color="red" clicked={handleAddTraining}>Zapisz trening</Button>}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    addTrainingForm: state.addTrainingForm.training,
    token: state.auth.token,
    trainings: state.trainings.trainings,
    isEdit: state.addTrainingForm.isEdit
  }
};

export default connect(mapStateToProps, {addTraining, editTrainingInApi})(AddTrainingResult);
