import {RECEIVE_CARTED_ITEM_ERRORS, REMOVE_CARTED_ITEM_ERRORS} from '../actions/carted_item.actions'

const cartedItemsErrorsReducer = (oldstate = [], action) => {
    Object.freeze(oldstate);

    switch (action.type){
        case RECEIVE_CARTED_ITEM_ERRORS:
            return action.errors;
        case REMOVE_CARTED_ITEM_ERRORS:
            return [];
        default:
            return oldstate //testbundle lock --add-platform x86_64-linux

    }
}

export default cartedItemsErrorsReducer;