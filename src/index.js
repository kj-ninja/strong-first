import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirebaseAuthContext from "./components/Firebase/auth";
import auth from "./components/Firebase/firebase";

ReactDOM.render(
    <SessionContext.Provider value={auth}>
        <App />
    </SessionContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
