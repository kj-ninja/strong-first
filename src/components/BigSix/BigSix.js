import React, {useState} from 'react';
import './BigSix.scss';
import {Link} from "react-router-dom";
import useWindowWidth from '../../functions/hooks/useWindowWidth';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Button from "react-bootstrap/Button";
import handleLogout from "../../functions/logout";
import Header from "../Header/Header";
import BigSixTable from "./BigSixTable";
import BigSixIcons from "./BigSixIcons/BigSixIcons";
import PushUps from "./Exercises/PushUps/PushUps";

const BigSix = () => {
    const width = useWindowWidth();
    const [exercise, setExercise] = useState('table');

    return (
        <>
            {width < 650 ? <HamburgerMenu setExercise={setExercise}/> :
            <Header logoLink={"/main"}>
                    <div className="big-six__buttons--desktop">
                        <Link onClick={()=>setExercise('table')}
                              to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>
                        <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                        <Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}
                                             variant="secondary">
                            Wyloguj się</Button>
                        </Link>
                    </div>
            </Header>}

            {exercise === 'table' && <BigSixTable/>}
            <BigSixIcons setExercise={setExercise}/>
            {exercise === 'push-ups' && <PushUps/>}
        </>
    )
};

export default BigSix;