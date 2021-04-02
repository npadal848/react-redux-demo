import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extention'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store

