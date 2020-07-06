import React, {useState} from 'react';
import './TrainingSummary.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {isEditTraining, addTrainingEditForm} from '../../../store/actions/addTrainingForm';
import {getRepsView} from "../../../functions/getRepsView";
import {trainingSummaryView} from '../../../functions/trainingSummaryView';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

const TrainingSummary = (props) => {
    const {trainingToShow} = props;
    const [key, setKey] = useState(trainingToShow[0].name);
    const exerciseView = trainingSummaryView(trainingToShow[0]);
    let trainingsView;

    const handleEditTraining = () => {
        props.isEditTraining(true);
        props.addTrainingEditForm(trainingToShow);
        props.history.push('/add-training');
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
        <div className="training-summary">
            <i className="far fa-edit edit" onClick={handleEditTraining}/>
            <i className="far fa-trash-alt trash" onClick={() => props.setModal(true)}/>
            <p className="training-summary__element"><span>Data:</span> {trainingToShow[0].date}</p>
            <p className="training-summary__element"><span>Nazwa:</span> {trainingToShow[0].name}</p>
            <p className="training-summary__element"><span>Czas:</span> {trainingToShow[0].duration}</p>
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
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey={trainingToShow[0].name} title={trainingToShow[0].name}>
                    {trainingView}
                </Tab>
                <Tab eventKey={trainingToShow[1].name} title={trainingToShow[1].name}>
                    <div className="training-summary">
                        <i className="far fa-edit edit" onClick={handleEditTraining}/>
                        <i className="far fa-trash-alt trash" onClick={() => props.setModal(true)}/>
                        <p className="training-summary__element"><span>Data:</span> {trainingToShow[1].date}</p>
                        <p className="training-summary__element"><span>Nazwa:</span> {trainingToShow[1].name}</p>
                        <p className="training-summary__element"><span>Czas:</span> {trainingToShow[1].duration}</p>
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

    return trainingToShow.length === 2 ? trainingsView : trainingView;

};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
};

export default connect(mapStateToProps, {addTrainingEditForm, isEditTraining})(withRouter(TrainingSummary));