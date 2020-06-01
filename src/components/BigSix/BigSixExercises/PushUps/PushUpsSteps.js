import React from 'react';

const PushUpSteps = ({bigSix, active}) => {
    return (
        <>
            <div className="exercises__header">
                <h3>{bigSix[0].techniques[0].steps[active].stepName}</h3>
                <h2>{bigSix[0].techniques[0].steps[active].name}</h2>
            </div>
            <div className="exercises__images">
                <div className="exercises__image"/>
                <div className="exercises__image"/>
            </div>
            <div className="exercises__goals-container">
                <h3 className="exercises__goals-title">Cele treningowe:</h3>
                <ul className="exercises__goals-list">
                    <li>Próg początkowy: {bigSix[0].techniques[0].steps[active].stages.beginner}</li>
                    <li>Próg średniozaawansowany: {bigSix[0].techniques[0].steps[active].stages.intermediate}</li>
                    <li>Próg przejścia: {bigSix[0].techniques[0].steps[active].stages.expert}</li>
                </ul>
            </div>
        </>
    );
};

export default PushUpSteps;

