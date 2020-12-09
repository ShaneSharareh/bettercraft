import {RECEIVE_CURRENT_USER} from '../actions/session_action'

export default userReducer = (oldstate = {},actions) => {
    Object.freeze(oldstate);
    switch (actions.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        default:
            return oldState;
    }
};