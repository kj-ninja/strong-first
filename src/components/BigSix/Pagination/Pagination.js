import React from 'react';
import handleStep from '../../../functions/handleStep';

const Pagination = ({active, setActive, bigSix}) => {

    return (
        <div className="exercises__paginate-container">
            <ul className="exercises__paginate-list">
                {bigSix[0].techniques[0].steps.map((step, i) => {
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