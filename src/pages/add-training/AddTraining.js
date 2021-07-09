import React from 'react';
import {connect} from 'react-redux';
import './AddTraining.scss';
import {Switch, Route} from 'react-router-dom';
import AddTrainingStepOne from "./components/AddTrainingStepOne";
import AddTrainingStepTwo from "./components/AddTrainingStepTwo";
import TrainingSummary from "../diary/training-summary/TrainingSummary";
import Spinner from "../../components/ui/spinner/Spinner";

const AddTraining = (props) => {
  return (
    <>
      {props.loading ? <Spinner/> :
        <>
          <Switch>
            <Route path="/add-training/step2" component={AddTrainingStepTwo}/>
            <Route path="/add-training/result" component={TrainingSummary}/>
            <Route path="/add-training" component={AddTrainingStepOne}/>
          </Switch>
        </>}
    </>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.trainings.loading,
  }
};

export default connect(mapStateToProps)(AddTraining);
