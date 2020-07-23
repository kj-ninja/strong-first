import React, {useEffect, useState} from 'react';
import './Diary.scss';
import {connect} from 'react-redux';
import {fetchAllTrainings, trainingToShowHandler, deleteTrainingFromApi} from "../../store/actions/trainings";
import TrainingSummary from "./TrainingSummary/TrainingSummary";
import Calendar from "./Calendar/Calendar";
import Spinner from "../../components/UI/Spinner/Spinner";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

const Diary = (props) => {
    const {
        fetchAllTrainings, token, trainingToShow, trainings, trainingToShowHandler, error, deleteTrainingFromApi,
        trainingToDelete
    } = props;
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchAllTrainings(token);
    }, [fetchAllTrainings, token]);

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
            deleteTrainingFromApi(trainingToDelete[0].id, token);
            setModal(false)
        } else {
            deleteTrainingFromApi(trainingToShow[0].id, token);
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

export default connect(mapStateToProps, {fetchAllTrainings, trainingToShowHandler, deleteTrainingFromApi})(Diary);