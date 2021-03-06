import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './store/reducers';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
