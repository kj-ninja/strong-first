import React from 'react';
import {getRepsView} from "../../../functions/getRepsView";

const TrainingSummaryList = ({exercisesPreview}) => {
    return (
        <ul className="training_summary__list list-group">
            {exercisesPreview.map(element => {
                console.log(element);
                return (
                    <li key={element.id} className="training_summary__exercise list-group-item">
                        <span className="training_summary__exercise-name">{element.name.toUpperCase()}:</span>
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
};

export default TrainingSummaryList;