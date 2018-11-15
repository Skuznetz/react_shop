import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router,Route} from 'react-router'
import Layout from 'containers/layout'
import Books from 'containers/books'

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route component = {Layout}>
                <Route path = '/' component = {Books} />
            </Route>
        </Router>
    </Provider>,
document.getElementById('root')    
)

