import React from 'react';
import '../AddTraining/AddTraining.scss';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {addTrainingToApi} from "../../store/actions/trainings";
import DodajTreningStepOne from "./DodajTreningStepOne";
import DodajTreningStepTwo from "./DodajTreningStepTwo";
import PodsumowanieTreningu from "./PodsumowanieTreningu";
import Spinner from "../../components/UI/Spinner/Spinner";

const DodajTrening = (props) => {
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
        loading: state.trainings.loading,
        training: state.addTrainingForm.training
    }
};

export default connect(mapStateToProps, {addTrainingToApi})(DodajTrening);