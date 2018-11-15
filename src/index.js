import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router,Route} from 'react-router'
import Layout from 'containers/layout'
import Books from 'containers/books'
import createBrowserHistory from "history/createBrowserHistory"
const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter history = {history}>
            <Route component = {Layout}>
                <Route path = '/' component = {Books} />
            </Route>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')    
)

