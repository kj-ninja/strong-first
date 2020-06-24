import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import Diary from "./containers/Diary/Diary";
import AddTraining from "./components/AddTraining/AddTraining";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BigSix from "./containers/BigSix/BigSix";

function App() {
    return (
        <>
            <HashRouter>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/main" component={Diary}/>
                    <Route path="/add-training" render={(props) => <AddTraining {...props}/>}/>
                    <Route path="/big-six" component={BigSix}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;
