import React from 'react';

const PushUpStepTwo = () => {
    return (
        <>
            <div className="exercises__header">
                <h3>Krok 2</h3>
                <h2>Pompki pochylone</h2>
            </div>
            <div className="exercises__images">
                <div className="exercises__image"/>
                <div className="exercises__image"/>
            </div>
            <div className="exercises__goals-container">
                <h3 className="exercises__goals-title">Cele treningowe:</h3>
                <ul className="exercises__goals-list">
                    <li>Próg początkowy: 3 seria po 10 powtórzeń</li>
                    <li>Próg średniozaawansowany: 2 serie po 20 powtórzeń</li>
                    <li>Próg przejścia: 3 serie po 40 powtórzeń</li>
                </ul>
            </div>
        </>
    );
};

export default PushUpStepTwo;