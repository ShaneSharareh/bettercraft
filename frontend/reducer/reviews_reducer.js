import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/product_actions'


const RevewReducer = (oldstate = {}, action) =>{
    Object.freeze(oldstate);
    let nextState = Object.assign({}, oldstate);
    switch(action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
             return Object.assign({},oldstate,action.review)
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState;
        default:
            return oldstate
    }
}

export default RevewReducer;