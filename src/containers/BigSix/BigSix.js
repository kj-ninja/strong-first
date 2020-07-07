import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchBigSix} from '../../store/actions/bigSix';
import './BigSix.scss';
import BigSixTable from "./BigSixTable";
import BigSixIcons from "./BigSixIcons/BigSixIcons";
import BigSixExercises from "./BigSixExercises/BigSixExercises";
import {Route, Switch} from "react-router-dom";

const BigSix = (props) => {
    const {token, fetchBigSix, bigSix} = props;

    const [exercise, setExercise] = useState('table');
    const [isTable, setIsTable] = useState(true);
    const [isExercise, setIsExercise] = useState(false);
    console.log(bigSix);

    const styles = {
        fontSize: '20px',
        marginTop: '30px',
        textAlign: 'center'
    };

    useEffect(()=>{
        fetchBigSix(token);
    }, [fetchBigSix, token]);

    const handleClickExercise = (e) => {
        setIsTable(false);
        setExercise(e.target.id);
        setIsExercise(true);
    };

    return (
        <>
            <BigSixTable exercise={exercise} isTable={isTable}/>
            <p style={styles}>Wybierz ćwiczenie!</p>
            <BigSixIcons handleClickExercise={handleClickExercise}/>
            {bigSix.length === 0 ? null : <BigSixExercises bigSix={bigSix} isExercise={isExercise} exercise={exercise}/>}
            <Switch>
                {/*<Route path="/big-six/" component={DodajTreningStepTwo}/>*/}
                {/*<Route path="/big-six/" component={DodajTreningStepTwo}/>*/}
                {/*<Route path="/big-six/" component={DodajTreningStepTwo}/>*/}
                {/*<Route path="/big-six/" component={DodajTreningStepTwo}/>*/}
                {/*<Route path="/big-six/" component={DodajTreningStepTwo}/>*/}
                {/*<Route path="/big-six/" component={DodajTreningStepTwo}/>*/}
            </Switch>
        </>
    )
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        bigSix: state.bigSix.bigSix
    }
};

export default connect(mapStateToProps, {fetchBigSix})(BigSix);