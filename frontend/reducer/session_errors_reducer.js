import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_action'

const sessionErrorsReducer = (oldstate = [], action) => {
    Object.freeze(oldstate);

    switch (action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return[];
        default:
            return oldstate
    }
}

export default sessionErrorsReducer;