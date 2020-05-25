import React from 'react';
import {getRepsView} from "../../../functions/getRepsView";

const TrainingSummaryList = ({exerciseView}) => {
    return (
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
};

export default TrainingSummaryList;