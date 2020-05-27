import React from 'react';

const PushUpStepOne = () => {
    return (
        <>
            <div className="push-ups__header">
                <h3>Krok 1</h3>
                <h2>Pompki przy ścianie</h2>
            </div>
            <div className="push-ups__images">
                <div className="push-ups__image"/>
                <div className="push-ups__image"/>
            </div>
            <div className="push-ups__goals-container">
                <h3 className="push-ups__goals-title">Cele treningowe:</h3>
                <ul className="push-ups__goals-list">
                    <li>Próg początkowy: 3 serie po 10 powtórzeń</li>
                    <li>Próg średniozaawansowany: 3 serie po 25 powtórzeń</li>
                    <li>Próg przejścia: 3 serie po 50 powtórzeń</li>
                </ul>
            </div>
        </>
    );
};

export default PushUpStepOne;