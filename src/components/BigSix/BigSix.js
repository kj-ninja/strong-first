import React, {useState} from 'react';
import './BigSix.scss';
import {Link} from "react-router-dom";
import Transition from "react-transition-group/cjs/Transition";
import useWindowWidth from '../../functions/hooks/useWindowWidth';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Button from "react-bootstrap/Button";
import handleLogout from "../../functions/logout";
import Header from "../Header/Header";
import BigSixTable from "./BigSixTable";
import BigSixIcons from "./BigSixIcons/BigSixIcons";
import PushUps from "./Exercises/PushUps/PushUps";

const defaultStyleBigSix = {
    opacity: '1'
}
const transitionStylesBigSix = {
    entering: {opacity: 0, top: '-1000px'},
    entered: {opacity: 1, top: '0'},
    exiting:  { opacity: 1, top: '0' },
    exited:  { opacity: 0, top: '-1000px'}
};
const defaultStylePushUps= {
    opacity: '0',
}
const transitionStylesPushUps = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting:  { opacity: 1 },
    exited:  { opacity: 0}
};

const BigSix = () => {
    const width = useWindowWidth();
    const [exercise, setExercise] = useState('table');
    const [isTable, setIsTable] = useState(true);
    const [isPushUps, setIsPushUps] = useState(false);

    const handleClickPushUps = () => {
        setIsTable(false);
        setExercise('push-ups');
        setIsPushUps(true);
    };

    const handleClickBigSix = () => {
        setIsTable(true);
        setExercise('table');
        setIsPushUps(false);
    };

    return (
        <>
            {width < 650 ? <HamburgerMenu setExercise={setExercise}/> :
            <Header logoLink={"/main"}>
                    <div className="big-six__buttons--desktop">
                        <Link onClick={handleClickBigSix}
                              to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>
                        <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                        <Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}
                                             variant="secondary">
                            Wyloguj się</Button>
                        </Link>
                    </div>
            </Header>}
            <BigSixIcons handleClickPushUps={handleClickPushUps}/>
            <Transition in={isTable} timeout={50} appear={true} unmountOnExit={true}>
                {state => (
                    <section className="big-six__cover" style={{
                        ...defaultStyleBigSix,
                        ...transitionStylesBigSix[state]
                    }}>
                        {exercise === 'table' && <BigSixTable/>}
                    </section>
                )}
            </Transition>
            <Transition in={isPushUps} timeout={50} appear={true} unmountOnExit={true}>
                {state => (
                    <section className="push-ups__cover" style={{
                        ...defaultStylePushUps,
                        ...transitionStylesPushUps[state]
                    }}>
                        {exercise === 'push-ups' && <PushUps/>}
                    </section>
                )}
            </Transition>
        </>
    )
};

export default BigSix;