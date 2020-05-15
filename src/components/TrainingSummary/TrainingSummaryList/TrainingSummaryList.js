import React from 'react';
import {getRepsView} from "../../../functions/getRepsView";

const TrainingSummaryList = ({exercisesPreview}) => {
    return (
        <ul className="list-group training__list">
            {exercisesPreview.map(element=>{
                return (
                    <li key={element.id} className="list-group-item">
                        <span className="training__list-name">{element.name.toUpperCase()}:</span>
                        {getRepsView(element).map((rep,i)=>{
                            return (
                                <span key={i} className="training__list-repetition">
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