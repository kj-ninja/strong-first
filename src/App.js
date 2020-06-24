import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Layout from "./containers/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import Diary from "./containers/Diary/Diary";
import AddTraining from "./components/AddTraining/AddTraining";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BigSix from "./containers/BigSix/BigSix";
import Logout from "./containers/Auth/Logout/Logout";

function App(props) {
    return (
        <>
            <Layout>
                <ScrollToTop/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/diary" component={Diary}/>
                    <Route path="/add-training" render={(props) => <AddTraining {...props}/>}/>
                    <Route path="/big-six" component={BigSix}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.token !== null
    }
};

export default connect()(App);
