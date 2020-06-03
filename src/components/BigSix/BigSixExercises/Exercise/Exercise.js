import React, {useState} from 'react';
import '../Exercises.scss';
import Pagination from "../../Pagination/Pagination";

const Exercise = ({bigSix, exercise}) => {
    const [active, setActive] = useState(0);
    let exerciseNumber = 0;

    if (exercise === 'push-ups') {
        exerciseNumber = 0;
    }
    if (exercise === 'squats') {
        exerciseNumber = 1;
    }
    if (exercise === 'pull-ups') {
        exerciseNumber = 2;
    }
    if (exercise === 'sit-ups') {
        exerciseNumber = 3;
    }
    if (exercise === 'bridge"') {
        exerciseNumber = 4;
    }
    if (exercise === 'hand-stand') {
        exerciseNumber = 5;
    }

    return (
        <section className="exercises">
            <div className="exercises__header">
                <h3>Krok {bigSix.workouts[exerciseNumber].steps[active].stepNumber}</h3>
                <h2>{bigSix.workouts[exerciseNumber].steps[active].stepName}</h2>
            </div>
            <div className="exercises__images">
                <div className="exercises__image"/>
                <div className="exercises__image"/>
            </div>
            <div className="exercises__goals-container">
                <h3 className="exercises__goals-title">Cele treningowe:</h3>
                <ul className="exercises__goals-list">
                    <li>Próg początkowy: {bigSix.workouts[exerciseNumber].steps[active].stages.beginner}</li>
                    <li>Próg
                        średniozaawansowany: {bigSix.workouts[exerciseNumber].steps[active].stages.intermediate}</li>
                    <li>Próg przejścia: {bigSix.workouts[exerciseNumber].steps[active].stages.expert}</li>
                </ul>
            </div>
            <Pagination active={active} setActive={setActive} bigSix={bigSix} exerciseNumber={exerciseNumber}/>
        </section>
    );
};

export default Exercise;