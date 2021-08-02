import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import './NavigationItems.scss';

const NavigationItems = (props) => {
  const {isAuth} = props;

  return (
    <ul className="navigation-items">
      {isAuth ?
        <li className="navigation-item">
          <NavLink to="/big-six">Wielka szóstka</NavLink>
        </li> : null}

      {isAuth ?
        <li className="navigation-item">
          <NavLink to="/add-training">Dodaj trening</NavLink>
        </li> : null}

      {isAuth ? null :
        <li className="navigation-item">
          <NavLink exact to="/register">Zarejestruj się</NavLink>
        </li>}

      {isAuth ?
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

export default connect(mapStateToProps)(NavigationItems);
