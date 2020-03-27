import React from 'react';
import {getRepsView} from "../../functions/getRepsView";
import './TrainingSummary.scss';

const TrainingSummary = ({trainingToShow}) => {
    console.log("????",trainingToShow);
    // zrobic z tego funkcje \/
    let tempArray = [];
    trainingToShow.sets.forEach(set => {
        tempArray.push({name: set.exercise.name, id: set.exercise.id, repetitions: [], weight: [], time: []})
    });

    const removeDuplicates = arr => {
        // Create an array of objects
        let jsonObject = arr.map(JSON.stringify);
        let uniqueSet = new Set(jsonObject);

        return [...uniqueSet].map(JSON.parse);
    };
    const exercisesPreview = removeDuplicates(tempArray);

    trainingToShow.sets.forEach((set)=> {
        exercisesPreview.forEach((element)=>{
            if (set.exercise.id === element.id) {
                element.repetitions.push(set.repetitions);
                element.weight.push(set.weight);
                element.time.push(set.time)
            }
        })
    });

    return (
        <div>
            <div className="container training__summary">
                <p className="training__date"><span>Data:</span> {trainingToShow.date}</p>
                <p className="training__name"><span>Nazwa:</span>  {trainingToShow.name}</p>

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
                </div>
            </div>
    );
};

export default TrainingSummary;