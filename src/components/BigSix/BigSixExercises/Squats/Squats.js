import React, {useState} from 'react';
import SquatsSteps from "./SquatsSteps";
import Pagination from "../../Pagination/Pagination";

const Squats = ({bigSix}) => {
    const [active, setActive] = useState(0);

    return (
        <section className="exercises">
            <SquatsSteps bigSix={bigSix} active={active}/>
            <Pagination active={active} setActive={setActive} bigSix={bigSix} exerciseNumber={2}/>
        </section>
    );
};

export default Squats;