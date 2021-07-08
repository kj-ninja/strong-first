import React from 'react';
import handleStep from '../../../helpers/handleStep';

const Pagination = ({active, setActive, bigSix, exerciseNumber}) => {
    return (
        <div className="exercises__paginate-container">
            <ul className="exercises__paginate-list">
                {bigSix.workouts[exerciseNumber].steps.map((step, i) => {
                    return (
                        <li key={i} onClick={(e) => handleStep(e, setActive)}
                            className={active === i ? "exercises__paginate-element active" : "exercises__paginate-element"}>{step.stepNumber}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Pagination;
