import React, {useState} from 'react';
import './PushUp.scss';
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

const PushUps = () => {
    const [active, setActive] = useState('stepOne');
    const handleStep = (e) => {
        if (e.currentTarget.innerText === '1') {
            setActive('stepOne');
        }
        if (e.currentTarget.innerText === '2') {
            setActive('stepTwo');
        }
        if (e.currentTarget.innerText === '3') {
            setActive('stepThree');
        }
        if (e.currentTarget.innerText === '4') {
            setActive('stepFour');
        }
        if (e.currentTarget.innerText === '5') {
            setActive('stepFive');
        }
        if (e.currentTarget.innerText === '6') {
            setActive('stepSix');
        }
        if (e.currentTarget.innerText === '7') {
            setActive('stepSeven');
        }
        if (e.currentTarget.innerText === '8') {
            setActive('stepEight');
        }
        if (e.currentTarget.innerText === '9') {
            setActive('stepNine');
        }
        if (e.currentTarget.innerText === '10') {
            setActive('stepMaster');
        }
    };

    return (
        <section className="push-ups">
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

            <Pagination active={active} handleStep={handleStep}/>
        </section>
    );
};

export default PushUps;