import {RECEIVE_ALL_CARTED_ITEMS, RECEIVE_CARTED_ITEM} from '../actions/carted_item.actions'

const cartedItemsReducer = (oldstate = {}, action) =>{
    Object.freeze(oldstate);
    let nextState = Object.assign({}, oldstate);
    switch(action.type) {
        case RECEIVE_ALL_CARTED_ITEMS:
            return action.cartedItems;
        case RECEIVE_CARTED_ITEM:
             nextState[action.cartedItem.id] = action.cartedItem;
             return nextState;
        default:
            return oldstate
    }
}

export default cartedItemsReducer;