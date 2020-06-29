import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {authStateCheck} from './store/actions/auth';
import Layout from "./containers/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import Diary from "./containers/Diary/Diary";
import AddTraining from "./containers/AddTraining/AddTraining";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BigSix from "./containers/BigSix/BigSix";
import Logout from "./containers/Auth/Logout/Logout";
import DodajTrening from "./containers/DodajTrening/DodajTrening";

function App(props) {
    const {authStateCheck} = props;

    useEffect(() => {
        authStateCheck();
    }, [authStateCheck]);

    let routes = (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={Home}/>
            <Redirect to="/"/>
        </Switch>
    );

    if (props.isAuth) {
        routes = (
            <Switch>
                <Route path="/diary" component={Diary}/>
                <Route path="/big-six" component={BigSix}/>
                <Route path="/add-training" render={(props) => <DodajTrening {...props}/>}/>
                <Route path="/logout" component={Logout}/>
                <Redirect to='/diary'/>
                <Route component={NotFound}/>
            </Switch>
        );
    }

    return (
        <>
            <Layout>
                <ScrollToTop/>
                {routes}
            </Layout>
        </>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
};

export default connect(mapStateToProps, {authStateCheck})(App);
