import React, {useState} from 'react';
import './TrainingSummary.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {isEditTraining, addTrainingEditForm} from '../../../store/actions/add-training.actions';
import {getRepsView} from "../../../utils/getRepsView";
import {timeConvert} from '../../../utils/timeConvert';
import {trainingSummaryView} from '../../../utils/trainingSummaryView';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const TrainingSummary = (props) => {
    const {trainingToShow, addTrainingEditForm} = props;
    const [key, setKey] = useState();
    const exerciseView = trainingSummaryView(trainingToShow[0]);
    let trainingsView;

    const handleEditTraining = () => {
        let trainingToEdit = null;
        if (trainingToShow.length === 2) {
            trainingToShow.forEach(training => {
                if (training.id === +key) {
                    trainingToEdit = training;
                }
            });
        } else {
            trainingToEdit = trainingToShow[0];
        }

        props.isEditTraining(true);
        addTrainingEditForm(trainingToEdit);
        props.history.push('/add-training');
    };

    const handleTab = (k) => {
        setKey(k);
        const setTrainingToDelete = trainingToShow.filter(training => training.id === +k)
        props.trainingToDelete(setTrainingToDelete);
    };

    let trainingSummaryList = (
        <ul className="training-summary__list list-group">
            {exerciseView.map(element => {
                return (
                    <li key={element.id} className="training-summary__exercise list-group-item">
                        <span className="training-summary__exercise-name">{element.name.toUpperCase()}:</span>
                        {getRepsView(element).map((rep, i) => {
                            return (
                                <span key={i} className="training-summary__exercise-rep">
                                    {rep}
                                </span>
                            )
                        })}
                    </li>
                )
            })}
        </ul>
    );

    let trainingView = (
            <div className={trainingToShow.length === 2 ? "training-summary tabs" : "training-summary"}>
                <i className="far fa-edit edit" onClick={handleEditTraining}/>
                <i className="far fa-trash-alt trash" onClick={() => props.setModal(true)}/>
                <p className="training-summary__element"><span>Data:</span> {trainingToShow[0].date}</p>
                <p className="training-summary__element"><span>Nazwa:</span> {trainingToShow[0].name}</p>
                <p className="training-summary__element"><span>Czas:</span> {timeConvert(trainingToShow[0].duration)}
                </p>
                <p className="training-summary__element"><span>Spalone kalorie:</span> {trainingToShow[0].kcal}</p>
                <p className="training-summary__element">
                    <span>Łączna ilość serii:</span> {trainingToShow[0].sets.length}</p>
                {trainingSummaryList}
                <div className="training-summary__notes">
                    <p>Notatki:</p>
                    {trainingToShow[0].note.toLowerCase()}
                </div>
            </div>
    );

    if (trainingToShow.length === 2) {
        const exerciseView2 = trainingSummaryView(trainingToShow[1]);

        let trainingSummaryList2 = (
            <ul className="training-summary__list list-group">
                {exerciseView2.map(element => {
                    return (
                        <li key={element.id} className="training-summary__exercise list-group-item">
                            <span className="training-summary__exercise-name">{element.name.toUpperCase()}:</span>
                            {getRepsView(element).map((rep, i) => {
                                return (
                                    <span key={i} className="training-summary__exercise-rep">
                                    {rep}
                                </span>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        );
        trainingsView = (
                <Tabs
                    unmountOnExit
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => handleTab(k)}
                >
                    <Tab eventKey={trainingToShow[0].id} title={trainingToShow[0].name}>
                        {trainingView}
                    </Tab>
                    <Tab eventKey={trainingToShow[1].id} title={trainingToShow[1].name}>
                        <div className="training-summary tabs">
                            <i className="far fa-edit edit" onClick={handleEditTraining}/>
                            <i className="far fa-trash-alt trash" onClick={() => props.setModal(true)}/>
                            <p className="training-summary__element"><span>Data:</span> {trainingToShow[1].date}</p>
                            <p className="training-summary__element"><span>Nazwa:</span> {trainingToShow[1].name}</p>
                            <p className="training-summary__element">
                                <span>Czas:</span> {timeConvert(trainingToShow[1].duration)}</p>
                            <p className="training-summary__element">
                                <span>Spalone kalorie:</span> {trainingToShow[1].kcal}</p>
                            <p className="training-summary__element">
                                <span>Łączna ilość serii:</span> {trainingToShow[1].sets.length}</p>
                            {trainingSummaryList2}
                            <div className="training-summary__notes">
                                <p>Notatki:</p>
                                {trainingToShow[1].note.toLowerCase()}
                            </div>
                        </div>
                    </Tab>
                </Tabs>
        );
    }

    return (
        <div className="training-summary__container">
            {trainingToShow.length === 2 ? trainingsView : trainingView}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        trainingToShow: state.trainings.trainingToShow,
        token: state.auth.token
    }
};

export default connect(mapStateToProps, {
    addTrainingEditForm,
    isEditTraining,
})(withRouter(TrainingSummary));
