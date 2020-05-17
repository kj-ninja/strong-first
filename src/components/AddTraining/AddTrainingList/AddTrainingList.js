import React from 'react';
import './AddTrainingList.scss';
import {getRepsView} from "../../../functions/getRepsView";

const AddTrainingList = ({exercisesView, setExercisesView}) => {

    return (
        <ul className="add-training__list list-group">
            {exercisesView.map(element => {
                console.log(element);
                return (
                    <li key={element.id} className="add-training__exercise list-group-item">
                        <span className="add-training__exercise-name">{element.name.toUpperCase()}:</span>
                        {getRepsView(element).map((rep, i) => {
                            return (
                                <span key={i} className="add-training__exercise-rep">
                                    {rep}
                                </span>
                            )
                        })}
                    </li>
                )
            })}
        </ul>
    );
};

export default AddTrainingList;