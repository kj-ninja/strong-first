import React from 'react';
import './TrainingSummary.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {isEditTraining, addTrainingEditForm} from '../../../store/actions/addTrainingForm';
import {getRepsView} from "../../../functions/getRepsView";

const TrainingSummary = (props) => {
    let tempArray = [];
    props.trainingToShow.sets.forEach(set => {
        tempArray.push({name: set.exercise.name, id: set.exercise.id, repetitions: [], weight: [], time: []})
    });

    const removeDuplicates = arr => {
        // Create an array of objects
        let jsonObject = arr.map(JSON.stringify);
        let uniqueSet = new Set(jsonObject);

        return [...uniqueSet].map(JSON.parse);
    };
    const exerciseView = removeDuplicates(tempArray);

    props.trainingToShow.sets.forEach((set) => {
        exerciseView.forEach((element) => {
            if (set.exercise.id === element.id) {
                element.repetitions.push(set.repetitions);
                element.weight.push(set.weight);
                element.time.push(set.time)
            }
        })
    });

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

    const handleEditTraining = () => {
        props.isEditTraining(true);
        props.addTrainingEditForm(props.trainingToShow);
        props.history.push('/add-training');
    };

    return (
        <div className="training-summary">
            <i className="far fa-edit edit" onClick={handleEditTraining}/>
            <i className="far fa-trash-alt trash"/>
            <p className="training-summary__date"><span>Data:</span> {props.trainingToShow.date}</p>
            <p className="training-summary__name"><span>Nazwa:</span> {props.trainingToShow.name}</p>
            {trainingSummaryList}
            <div className="training-summary__notes">
                <p>Notatki:</p>
                {props.trainingToShow.note.toLowerCase()}
            </div>
        </div>
    );
};

export default connect(null, {addTrainingEditForm, isEditTraining})(withRouter(TrainingSummary));