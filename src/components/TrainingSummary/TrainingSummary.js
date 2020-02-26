import React from 'react';

const TrainingSummary = ({trainingToShow}) => {

    const exercisePreview = {};


    const getRepsView = sets => {
        let repView = '';

            if (sets.time !== 0 && sets.time !== '0' && sets.time !== null && sets.time !== undefined) {
                repView += sets.time + 'sec ';
            } else if (sets.weight !== 0 && sets.weight !== '0' && sets.weight !== null && sets.weight !== undefined) {
                repView += sets.repetitions + 'x' + sets.weight + 'kg ';
            } else {
                repView += sets.repetitions + 'x ';
            }
            return repView;
    };

    return (
        <div>
            <div className="container">
                <p className="training-date">Data: {exercisePreview.date}</p>
                <p className="training-name">Nazwa: {exercisePreview.name}</p>

                <div className="container exercise-summary">
                    {/*<span className="exercise-name" style={{marginRight: '20px'}}>*/}
                    {/*    {trainingToShow.sets.map(set=>{*/}
                    {/*        return (*/}
                    {/*            set.exercise.name.toUpperCase()*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*    {trainingToShow.sets[0].exercise.name.toUpperCase()}:*/}
                    {/*</span>*/}

                    {/*{trainingToShow.sets.map((reps, i)=>{*/}
                    {/*    return (*/}
                    {/*        <span key={i}>{i+1} Seria: {getRepsView(trainingToShow.sets[i])}</span>*/}
                    {/*    )*/}
                    {/*})}*/}
                </div>
            </div>
        </div>
    );
};

export default TrainingSummary;