import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import App from './App';
import reducers from 'reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
