import React from 'react';

const PushUpStepEight = () => {
    return (
        <>
            <div className="exercises__header">
                <h3>Krok 8</h3>
                <h2>Półpompki na jednej ręce</h2>
            </div>
            <div className="exercises__images">
                <div className="exercises__image"/>
                <div className="exercises__image"/>
            </div>
            <div className="exercises__goals-container">
                <h3 className="exercises__goals-title">Cele treningowe:</h3>
                <ul className="exercises__goals-list">
                    <li>Próg początkowy: 2 serie po 5 powtórzeń</li>
                    <li>Próg średniozaawansowany: 2 serie po 10 powtórzeń</li>
                    <li>Próg przejścia: 2 serie po 20 powtórzeń</li>
                </ul>
            </div>
        </>
    );
};

export default PushUpStepEight;