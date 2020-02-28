import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import Home from "../Home/Home";
import Main from "../Main/Main";
import AddTraining from "../AddTraining/AddTraining";
import FooterPage from "../Footer/Footer";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import NotFound from "../NotFound/NotFound";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Button from "react-bootstrap/Button";

function App() {
    let tempArr = window.location.href.split("/");
    let addressEnd = tempArr[tempArr.length-1]
    console.log("???",addressEnd);


  return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/add-training" component={AddTraining}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Route component={NotFound}/>
                </Switch>
                <FooterPage />
            </HashRouter>
        </>
  );
}

export default App;
