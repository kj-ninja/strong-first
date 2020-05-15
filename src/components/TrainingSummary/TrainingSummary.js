import React from 'react';
import './TrainingSummary.scss';
import TrainingSummaryList from "./TrainingSummaryList/TrainingSummaryList";

const TrainingSummary = ({trainingToShow}) => {
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

                <TrainingSummaryList exercisesPreview={exercisesPreview}/>

                </div>
            </div>
    );
};

export default TrainingSummary;