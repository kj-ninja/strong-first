import React, {useEffect, useState} from 'react';
import './Diary.scss';
import {connect} from 'react-redux';
import {getAllTrainings, trainingToShowHandler, deleteTraining} from "../../store/actions/trainings.actions";
import TrainingSummary from "./training-summary/TrainingSummary";
import Calendar from "./calendar/Calendar";
import Spinner from "../../components/ui/spinner/Spinner";
import Backdrop from "../../components/ui/back-drop/Backdrop";

const Diary = (props) => {
  const {
    getAllTrainings, trainingToShow, trainings, trainingToShowHandler, error, deleteTraining,
    trainingToDelete
  } = props;
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getAllTrainings();
  }, [getAllTrainings]);

  if (error === 404) {
    return (
      <h2 className="diary__warning">
        Brak treningów w historii! <br/>
        Dodaj swój pierwszy trening!
      </h2>
    );
  }

  if (error) {
    return (
      <h2 style={{textAlign: 'center', marginTop: '70px', fontSize: '24px'}}>
        Coś poszło nie tak!
      </h2>
    );
  }

  const handleDeleteTraining = () => {
    if (trainingToShow.length === 2) {
      deleteTraining(trainingToDelete[0].id);
      setModal(false)
    } else {
      deleteTraining(trainingToShow[0].id);
      setModal(false)
    }
  };

  let diary = <Spinner/>;
  let popUp = (
    <div className="popUp" style={{
      transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: modal ? '1' : '0'
    }}>
      <h2>Na pewno chcesz usunąć trening?</h2>
      <button type="button" onClick={() => setModal(false)} style={{color: 'green'}}>Anuluj</button>
      <button type="button" onClick={handleDeleteTraining} style={{color: '#bd2130'}}>Usuń trening
      </button>

    </div>
  );

  if (trainingToShow) {
    diary = (
      <>
        <Backdrop show={modal} cancel={() => setModal(false)}/>
        {popUp}
        <Calendar trainings={trainings} setTrainingToShow={trainingToShowHandler}/>
        <TrainingSummary setModal={setModal}/>
      </>
    );
  }

  return diary;
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    trainings: state.trainings.trainings,
    trainingToShow: state.trainings.trainingToShow,
    error: state.trainings.error,
    loading: state.trainings.loading,
    trainingToDelete: state.trainings.trainingToDelete
  }
};

export default connect(mapStateToProps, {getAllTrainings, trainingToShowHandler, deleteTraining})(Diary);
