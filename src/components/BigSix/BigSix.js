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

const defaultStyle = {
    opacity: '1'
}
const transitionStyles = {
    entering: {opacity: 0, top: '-1000px'},
    entered: {opacity: 1, top: '0'},
    exiting:  { opacity: 1, top: '0' },
    exited:  { opacity: 0, top: '-1000px'}
};
const defaultStyle2= {
    opacity: '0',
}
const transitionStyles2 = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting:  { opacity: 1 },
    exited:  { opacity: 0}
};

const BigSix = () => {
    const width = useWindowWidth();
    const [exercise, setExercise] = useState('table');
    const [inProp, setInProp] = useState(true);
    const [inProp2, setInProp2] = useState(false);

    const handleClickPushUps = () => {
        setInProp(false);
        setExercise('push-ups');
        setInProp2(true);
    };

    const handleClickBigSix = () => {
        setInProp(true);
        setExercise('table');
        setInProp2(false);
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

            <Transition in={inProp} timeout={50} appear={true} unmountOnExit={true}>
                {state => (
                    <section className="big-six__cover" style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        {exercise === 'table' && <BigSixTable/>}
                    </section>
                )}
            </Transition>

            <Transition in={inProp2} timeout={50} appear={true} unmountOnExit={true}>
                {state => (
                    <section className="push-ups__cover" style={{
                        ...defaultStyle2,
                        ...transitionStyles2[state]
                    }}>
                        {exercise === 'push-ups' && <PushUps/>}
                    </section>
                )}
            </Transition>



        </>
    )
};

export default BigSix;