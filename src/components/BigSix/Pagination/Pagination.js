import React from 'react';

const Pagination = ({active, setActive, handleStep}) => {
    return (
        <div className="exercises__paginate-container">
            <ul className="exercises__paginate-list">
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepOne' ? "exercises__paginate-element active" : "exercises__paginate-element"}>1</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepTwo' ? "exercises__paginate-element active" : "exercises__paginate-element"}>2</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepThree' ? "exercises__paginate-element active" : "exercises__paginate-element"}>3</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepFour' ? "exercises__paginate-element active" : "exercises__paginate-element"}>4</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepFive' ? "exercises__paginate-element active" : "exercises__paginate-element"}>5</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepSix' ? "exercises__paginate-element active" : "exercises__paginate-element"}>6</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepSeven' ? "exercises__paginate-element active" : "exercises__paginate-element"}>7</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepEight' ? "exercises__paginate-element active" : "exercises__paginate-element"}>8</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepNine' ? "exercises__paginate-element active" : "exercises__paginate-element"}>9</li>
                <li onClick={(e)=>handleStep(e, setActive)}
                    className={active === 'stepMaster' ? "exercises__paginate-element active" : "exercises__paginate-element"}>10</li>
            </ul>
        </div>
    );
};

export default Pagination;