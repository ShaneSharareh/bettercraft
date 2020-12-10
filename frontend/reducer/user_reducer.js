import {RECEIVE_CURRENT_USER} from '../actions/session_action'

const  userReducer = (oldstate = {},action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldstate, {[action.currentUser.id]: action.currentUser});
        default:
            return oldstate;
    }
};

export default userReducer