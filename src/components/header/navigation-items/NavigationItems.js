import React from 'react';
import {connect} from 'react-redux'
import {clearForm, isEditTraining} from '../../../store/actions/add-training.actions';
import {trainingsClearError} from '../../../store/actions/trainings.actions';

import './NavigationItems.scss';
import {NavLink} from "react-router-dom";

const NavigationItems = (props) => {
    const handleAddTrainingLink = () => {
        props.isEditTraining(false);
        props.clearForm();
    };

    return (
        <ul className="navigation-items">
            {props.isAuth ?
            <li className="navigation-item">
                <NavLink to="/big-six">Wielka szóstka</NavLink>
            </li> : null}

            {props.isAuth ?
            <li className="navigation-item">
                <NavLink to="/add-training" onClick={handleAddTrainingLink}>Dodaj trening</NavLink>
            </li> : null}

            {props.isAuth ? null :
            <li className="navigation-item">
                <NavLink exact to="/register">Zarejestruj się</NavLink>
            </li>}

            {props.isAuth ?
            <li className="navigation-item">
                <NavLink exact to="/logout" onClick={()=>props.trainingsClearError()}>Wyloguj się</NavLink>
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

export default connect(mapStateToProps, {isEditTraining, clearForm,trainingsClearError})(NavigationItems);
