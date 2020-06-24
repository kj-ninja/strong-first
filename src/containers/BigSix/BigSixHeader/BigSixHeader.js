import React from 'react';
import {Link} from "react-router-dom";
import useWindowWidth from '../../../functions/hooks/useWindowWidth';
import HamburgerMenu from "../../../components/HamburgerMenu/HamburgerMenu";
import Header from "../../../components/Header/Header";
import Button from "react-bootstrap/Button";
import handleLogout from "../../../functions/logout";

const BigSixHeader = ({handleBigSix}) => {
    const width = useWindowWidth();

    return (
        <div>
            {width < 650 ? <HamburgerMenu handleBigSix={handleBigSix}/> :
                <Header logoLink={"/main"}>
                    <div className="big-six__buttons--desktop">
                        <Link onClick={handleBigSix}
                              to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>
                        <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                        <Link to="/"><Button className="big-six__btn--logout" onClick={handleLogout}
                                             variant="secondary">
                            Wyloguj się</Button>
                        </Link>
                    </div>
                </Header>}
        </div>
    );
};

export default BigSixHeader;