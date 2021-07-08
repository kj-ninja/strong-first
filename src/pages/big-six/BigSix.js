import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchBigSix} from '../../store/actions/bigSix';
import './BigSix.scss';
import BigSixTable from "./BigSixTable";
import BigSixExercises from "./big-six-exercises/BigSixExercises";
import {Route, Switch} from "react-router-dom";

const BigSix = (props) => {
    const {token, fetchBigSix} = props;

    useEffect(() => {
        fetchBigSix(token);
    }, [fetchBigSix, token]);

    return (
        <Switch>
            <Route path="/big-six/push-ups" render={() => <BigSixExercises exercise="push-ups"/>}/>
            <Route path="/big-six/squats" render={() => <BigSixExercises exercise="squats"/>}/>
            <Route path="/big-six/pull-ups" render={() => <BigSixExercises exercise="pull-ups"/>}/>
            <Route path="/big-six/sit-ups" render={() => <BigSixExercises exercise="sit-ups"/>}/>
            <Route path="/big-six/bridge" render={() => <BigSixExercises exercise="bridge"/>}/>
            <Route path="/big-six/hand-stand" render={() => <BigSixExercises exercise="hand-stand"/>}/>
            <Route path='/big-six' component={BigSixTable}/>
        </Switch>
    )
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        bigSix: state.bigSix.bigSix
    }
};

export default connect(mapStateToProps, {fetchBigSix})(BigSix);
