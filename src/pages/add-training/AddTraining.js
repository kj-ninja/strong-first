import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import AddTrainingStepOne from "./components/AddTrainingStepOne";
import AddTrainingStepTwo from "./components/AddTrainingStepTwo";
import AddTrainingResult from "./components/AddTrainingResult";
import Spinner from "../../components/ui/spinner/Spinner";
import './AddTraining.scss';

const AddTraining = (props) => {
  return (
    <>
      {props.loading ? <Spinner/> :
        <>
          <Switch>
            <Route path="/add-training/step2" component={AddTrainingStepTwo}/>
            <Route path="/add-training/result" component={AddTrainingResult}/>
            <Route path="/add-training" component={AddTrainingStepOne}/>
          </Switch>
        </>}
    </>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.calendar.loading,
  }
};

export default connect(mapStateToProps)(AddTraining);
