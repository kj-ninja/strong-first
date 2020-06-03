import React from 'react';

const SquatsSteps = ({bigSix, active}) => {
    return (
        <>
            <div className="exercises__header">
                <h3>Krok {bigSix.workouts[1].steps[active].stepNumber}</h3>
                <h2>{bigSix.workouts[1].steps[active].stepName}</h2>
            </div>
            <div className="exercises__images">
                <div className="exercises__image"/>
                <div className="exercises__image"/>
            </div>
            <div className="exercises__goals-container">
                <h3 className="exercises__goals-title">Cele treningowe:</h3>
                <ul className="exercises__goals-list">
                    <li>Próg początkowy: {bigSix.workouts[1].steps[active].stages.beginner}</li>
                    <li>Próg średniozaawansowany: {bigSix.workouts[1].steps[active].stages.intermediate}</li>
                    <li>Próg przejścia: {bigSix.workouts[1].steps[active].stages.expert}</li>
                </ul>
            </div>
        </>
    );
};

export default SquatsSteps;