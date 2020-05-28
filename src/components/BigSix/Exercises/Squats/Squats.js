import React, {useState} from 'react';
import PushUpStepOne from "../PushUps/PushUpStepOne";
import PushUpStepTwo from "../PushUps/PushUpStepTwo";
import PushUpStepThree from "../PushUps/PushUpStepThree";
import PushUpsStepFour from "../PushUps/PushUpsStepFour";
import PushUpStepFive from "../PushUps/PushUpStepFive";
import PushUpStepSix from "../PushUps/PushUpStepSix";
import PushUpStepSeven from "../PushUps/PushUpStepSeven";
import PushUpStepEight from "../PushUps/PushUpStepEight";
import PushUpStepNine from "../PushUps/PushUpStepNine";
import PushUpMasterStep from "../PushUps/PushUpMasterStep";
import Pagination from "../../Pagination/Pagination";
import handleStep from "../../../../functions/handleStep";

const Squats = () => {
    const [active, setActive] = useState('stepOne');

    return (
        <section className="exercises">
            {active === 'stepOne' && <SquatsStepOne/>}
            {active === 'stepTwo' && <SquatsStepTwo/>}
            {active === 'stepThree' && <SquatsStepThree/>}
            {active === 'stepFour' && <SquatsStepFour/>}
            {active === 'stepFive' && <SquatsStepFive/>}
            {active === 'stepSix' && <SquatsStepSix/>}
            {active === 'stepSeven' && <SquatsStepSeven/>}
            {active === 'stepEight' && <SquatsStepEight/>}
            {active === 'stepNine' && <SquatsStepNine/>}
            {active === 'stepMaster' && <SquatsMasterStep/>}

            <Pagination active={active} setActive={setActive} handleStep={handleStep}/>
        </section>
    );
};

export default Squats;