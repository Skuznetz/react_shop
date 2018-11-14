import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<App />, document.getElementById('root'));

