import {RECEIVE_ERRORS, REMOVE_ERROR} from '../actions/carted_item.actions'

const cartedItemsErrorsReducer = (oldstate = [], action) => {
    Object.freeze(oldstate);

    switch (action.type){
        case RECEIVE_ERRORS:
            return action.errors;
        case REMOVE_ERROR:
            return [];
        default:
            return oldstate
    }
}

export default cartedItemsErrorsReducer;