import React from 'react';

const PushUpsStepFour = () => {
    return (
        <>
            <div className="exercises__header">
                <h3>Krok 4</h3>
                <h2>Półpompki</h2>
            </div>
            <div className="exercises__images">
                <div className="exercises__image"/>
                <div className="exercises__image"/>
            </div>
            <div className="exercises__goals-container">
                <h3 className="exercises__goals-title">Cele treningowe:</h3>
                <ul className="exercises__goals-list">
                    <li>Próg początkowy: 3 serie po 8 powtórzeń</li>
                    <li>Próg średniozaawansowany: 3 serie po 12 powtórzeń</li>
                    <li>Próg przejścia: 2 serie po 25 powtórzeń</li>
                </ul>
            </div>
        </>
    );
};

export default PushUpsStepFour;