import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_action'

const nullUser = Object.freeze({id: null});

const sessionReducer = (oldstate = nullUser, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return nullUser
            default:
                return oldstate

    }
}

export default sessionReducer