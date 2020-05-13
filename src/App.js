import React from 'react';
import './scss/main.scss';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import AddTraining from "./components/AddTraining/AddTraining";
import FooterPage from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/add-training" component={AddTraining}/>
                    <Route component={NotFound}/>
                </Switch>
                <FooterPage/>
            </HashRouter>
        </>
    );
}

export default App;
