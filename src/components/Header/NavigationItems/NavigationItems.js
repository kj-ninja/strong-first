import React from 'react';
import {connect} from 'react-redux'
import {clearForm} from '../../../store/actions/addTraining';

import './NavigationItems.scss';
import {NavLink} from "react-router-dom";

const NavigationItems = (props) => {
    return (
        <ul className="navigation-items">
            {props.isAuth ?
            <li className="navigation-item">
                <NavLink exact to="/big-six">Wielka szóstka</NavLink>
            </li> : null}

            {props.isAuth ?
            <li className="navigation-item">
                <NavLink exact to="/add-training" onClick={()=>props.clearForm}>Dodaj trening</NavLink>
            </li> : null}

            {props.isAuth ? null :
            <li className="navigation-item">
                <NavLink exact to="/register">Zarejestruj się</NavLink>
            </li>}

            {props.isAuth ?
            <li className="navigation-item">
                <NavLink exact to="/logout">Wyloguj się</NavLink>
            </li> :
            <li className="navigation-item">
                <NavLink exact to="/login">Zaloguj się</NavLink>
            </li>}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
};

export default connect(mapStateToProps, {clearForm})(NavigationItems);