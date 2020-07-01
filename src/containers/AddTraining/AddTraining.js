import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import DodajTreningStepOne from "./AddTrainingStepOne";
import DodajTreningStepTwo from "./AddTrainingStepTwo";
import PodsumowanieTreningu from "./AddTrainingResult";
import Spinner from "../../components/UI/Spinner/Spinner";

const AddTraining = (props) => {
    return (
        <>
            {props.loading ? <Spinner/> :
            <>
                <Switch>
                    <Route path="/add-training/step2" component={DodajTreningStepTwo}/>
                    <Route path="/add-training/result" component={PodsumowanieTreningu}/>
                    <Route path="/add-training" component={DodajTreningStepOne}/>
                </Switch>
            </>}
        </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.addTraining.loading,
        training: state.addTraining.training
    }
};

export default connect(mapStateToProps)(AddTraining);