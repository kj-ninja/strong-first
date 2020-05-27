import React from 'react';

const Pagination = ({active, handleStep}) => {
    return (
        <div className="push-ups__paginate-container">
            <ul className="push-ups__paginate-list">
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepOne' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>1</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepTwo' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>2</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepThree' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>3</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepFour' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>4</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepFive' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>5</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepSix' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>6</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepSeven' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>7</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepEight' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>8</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepNine' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>9</li>
                <li onClick={(e)=>handleStep(e)}
                    className={active === 'stepMaster' ? "push-ups__paginate-element active" : "push-ups__paginate-element"}>10</li>
            </ul>
        </div>
    );
};

export default Pagination;