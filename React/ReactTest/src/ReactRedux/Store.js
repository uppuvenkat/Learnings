import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
// import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Redux/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;
