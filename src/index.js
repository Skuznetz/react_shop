import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'


 import { Router,Route } from 'react-router-dom'
// import {syncHistoryWithStore} from 'react-router-redux'
// import Route from 'react-router-dom/Route'
import Layout from 'containers/layout'
import Books from 'containers/books'
import createBrowserHistory from "history/createBrowserHistory"

const history = createBrowserHistory();

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))




ReactDOM.render(
    <Provider store = {store}>
        <Router history={history}><div>
            <Route component = {Layout} />
                <Route path = '/' component = {Books} />
            </div>
        </Router>
    </Provider>,
document.getElementById('root')    
)

