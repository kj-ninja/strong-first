import React, {useContext} from 'react';
import './Header.scss';
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import FirebaseAuthContext from "../Firebase/auth";

const Header = (props) => {
    const auth = useContext(FirebaseAuthContext);

    return (
        <Nav>
            <div className="container main__header-wrapper">
                <h1 className="header-logo"><Link to={props.logoHomeLink}>Calisthenics</Link></h1>
                {props.children}
            </div>
            {/*ogarnac wylogowywanie*/}
            <button onClick={()=>auth.signOut()}>WYLOGUJ</button>
        </Nav>
    );
};

export default Header;