import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(<App />, document.getElementById('root'));

