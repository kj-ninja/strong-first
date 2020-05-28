import React, {useState} from 'react';
import '../Exercises.scss';
import PushUpStepOne from "./PushUpStepOne";
import PushUpStepTwo from "./PushUpStepTwo";
import PushUpStepThree from "./PushUpStepThree";
import PushUpsStepFour from "./PushUpsStepFour";
import PushUpStepFive from "./PushUpStepFive";
import PushUpStepSix from "./PushUpStepSix";
import PushUpStepSeven from "./PushUpStepSeven";
import PushUpStepEight from "./PushUpStepEight";
import PushUpStepNine from "./PushUpStepNine";
import PushUpMasterStep from "./PushUpMasterStep";
import Pagination from "../../Pagination/Pagination";
import handleStep from "../../../../functions/handleStep";

const PushUps = () => {
    const [active, setActive] = useState('stepOne');

    return (
        <section className="exercises">
            {active === 'stepOne' && <PushUpStepOne/>}
            {active === 'stepTwo' && <PushUpStepTwo/>}
            {active === 'stepThree' && <PushUpStepThree/>}
            {active === 'stepFour' && <PushUpsStepFour/>}
            {active === 'stepFive' && <PushUpStepFive/>}
            {active === 'stepSix' && <PushUpStepSix/>}
            {active === 'stepSeven' && <PushUpStepSeven/>}
            {active === 'stepEight' && <PushUpStepEight/>}
            {active === 'stepNine' && <PushUpStepNine/>}
            {active === 'stepMaster' && <PushUpMasterStep/>}

            <Pagination active={active} setActive={setActive} handleStep={handleStep}/>
        </section>
    );
};

export default PushUps;