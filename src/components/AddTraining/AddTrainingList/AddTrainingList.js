import React from 'react';
import './AddTrainingList.scss';
import {getRepsView} from "../../../functions/getRepsView";

const AddTrainingList = ({exercisesView, setExercisesView}) => {

    const handleDeleteExercise = (id) => {
        const tempArray = exercisesView.filter(exercise => {
            return exercise.id !== id
        });
        setExercisesView(tempArray);
    };

    return (
            <ul className="add-training__list list-group">
                {exercisesView.map(element => {
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
                            <button onClick={() => handleDeleteExercise(element.id)} type="button"
                                    className="add-training__btn close">X</button>
                        </li>
                    )
                })}

            </ul>
    );
};

export default AddTrainingList;