import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header = (props) => {
    {/*ogarnac wylogowywanie*/
    }

    return (
        <header style={{backgroundColor: props.styles.backgroundColor}}>
            <div className="container header__wrapper">
                <h1 className="header__logo"><Link to={props.logoLink}
                                                   style={{color: props.styles.color}}>Calisthenics</Link></h1>
                {props.children}
            </div>

            {/*<button onClick={()=>auth.signOut()}>WYLOGUJ</button>*/}
        </header>
    );
};

export default Header;