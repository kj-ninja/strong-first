import React from 'react';
import './scss/main.scss';
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import AddTraining from "./components/AddTraining/AddTraining";
import FooterPage from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
  return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login}/>
                    {/*Ironman\/*/}
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
