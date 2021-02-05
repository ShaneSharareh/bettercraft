import {RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW_ERRORS} from '../actions/product_actions'

const reviewErrorsReducer = (oldstate = [], action) => {
    Object.freeze(oldstate);

    switch (action.type){
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case REMOVE_REVIEW_ERRORS:
            return [];
        default:
            return oldstate
    }
}

export default reviewErrorsReducer;