
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/root_reducer'
import logger from 'redux-logger'
const configureStore = (preloadstate = {}) =>(
    createStore(rootReducer,preloadstate,applyMiddleware(thunk,logger))
)

export default configureStore