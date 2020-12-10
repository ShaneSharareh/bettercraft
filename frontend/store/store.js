
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/root_reducer'

const configureStore = (preloadstate = {}) =>(
    createStore(rootReducer,preloadstate,applyMiddleware(thunk))
)

export default configureStore