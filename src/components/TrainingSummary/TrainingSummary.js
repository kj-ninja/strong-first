import React from 'react';
import {getRepsView} from "../../functions/getRepsView";

const TrainingSummary = ({trainingToShow}) => {
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
            <div className="container">
                <p className="training-date">Data: {trainingToShow.date}</p>
                <p className="training-name">Nazwa: {trainingToShow.name}</p>

                <ul className="list-group">
                    {exercisesPreview.map(element=>{
                        return (
                            <li key={element.id} className="list-group-item">
                                {element.name.toUpperCase()}: {getRepsView(element)}
                            </li>
                        )
                    })}
                </ul>
                </div>
            </div>
    );
};

export default TrainingSummary;