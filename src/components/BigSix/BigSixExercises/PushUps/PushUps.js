import React, {useState} from 'react';
import '../Exercises.scss';
import PushUpsSteps from './PushUpsSteps';
import Pagination from "../../Pagination/Pagination";

const PushUps = ({bigSix}) => {
    const [active, setActive] = useState(0);

    return (
        <section className="exercises">
            <PushUpsSteps bigSix={bigSix} active={active}/>
            <Pagination active={active} setActive={setActive} bigSix={bigSix}/>
        </section>
    );
};

export default PushUps;