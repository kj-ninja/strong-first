import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {logout} from '../../../store/actions/auth.actions';

const Logout = (props) => {
    const {logout} = props;

    useEffect(()=> {
        logout();
    }, [logout])

    return <Redirect to="/"/>
};

export default connect(null, {logout})(Logout);
