import React, {useState} from 'react';
import './scss/main.scss';
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import FooterPage from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import AddTraining from "./components/AddTraining/AddTraining";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
    const [token, setToken] = useState(null);

    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" render={()=><Login setToken={setToken}/>}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/main" render={()=><Main token={token}/>}/>
                    <Route path="/add-training" component={AddTraining}/>
                    <Route component={NotFound}/>
                </Switch>
                <FooterPage/>
            </HashRouter>
        </>
    );
}

export default App;
