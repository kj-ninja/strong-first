import React from 'react';
import './BigSix.scss';
import {Link} from "react-router-dom";
import useWindowWidth from '../../functions/hooks/useWindowWidth';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Button from "react-bootstrap/Button";
import handleLogout from "../../functions/logout";
import Header from "../Header/Header";
import BigSixTable from "./BigSixTable/BigSixTable";
import BigSixIcons from "./BigSixIcons/BigSixIcons";
import PushUps from "./Exercises/PushUps/PushUps";

const BigSix = () => {
    const width = useWindowWidth();

    return (
        <>
            {width < 650 ? <HamburgerMenu/> :
            <Header logoLink={"/main"}>
                    <div className="big-six__buttons--desktop">
                        <Link to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>
                        <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                        <Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}
                                             variant="secondary">
                            Wyloguj się</Button>
                        </Link>
                    </div>
            </Header>}

            {/*<BigSixTable/>*/}
            <BigSixIcons/>
            <PushUps/>
        </>
    )
};

export default BigSix;