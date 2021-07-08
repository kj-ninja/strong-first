import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {authStateCheck} from './store/actions/auth';
import Layout from "./layouts/Layout";
import Home from "./components/home/Home";
import Login from "./pages/authentication/login/Login";
import Register from "./pages/authentication/register/Register";
import Diary from "./pages/diary/Diary";
import NotFound from "./components/not-found/NotFound";
import ScrollToTop from "./components/ui/scroll-to-top/ScrollToTop";
import BigSix from "./pages/big-six/BigSix";
import Logout from "./pages/authentication/logout/Logout";
import AddTraining from "./pages/add-training/AddTraining";

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
        <Route path="/big-six" render={(props) => <BigSix {...props}/>}/>
        <Route path="/add-training" render={(props) => <AddTraining {...props}/>}/>
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
