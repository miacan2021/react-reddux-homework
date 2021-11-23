import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import  {memberReducer} from './reducer/memberReducer'

const store = createStore(memberReducer, applyMiddleware(logger))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById('root'));
