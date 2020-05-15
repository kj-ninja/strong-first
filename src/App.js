import React from 'react';
import './scss/main.scss';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import FooterPage from "./components/Footer/Footer";
import AddTraining from "./components/AddTraining/AddTraining";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <>
            <HashRouter>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/add-training" render={(props) => <AddTraining {...props}/>}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;
