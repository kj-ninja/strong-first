import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "../Header/Header";
import Home from "../Home/Home";
import Main from "../Main/Main";
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import Calendar from "../Calendar/Calendar";
import AddTraining from "../AddTraining/AddTraining";
import FooterPage from "../Footer/Footer";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {

  return (
        <>
            <HashRouter>
                <Header isRegister={true}
                        isLogged={false}
                        containerStyles={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '960px'}}
                        navbarStyles={{backgroundColor: '#fff', height: '60px'}}
                />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/add-training" component={AddTraining}/>
                <Route exact path="/register" component={RegisterForm}/>
                <FooterPage />
            </HashRouter>
        </>
  );
}

export default App;
