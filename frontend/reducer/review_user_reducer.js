import {RECEIVE_REVIEW_USER} from '../actions/review_user.actions'


const ReviewUserReducer = (oldstate = {}, action) =>{
    Object.freeze(oldstate);
    let nextState = Object.assign({}, oldstate);
    switch(action.type) {
        case RECEIVE_REVIEW_USER:
             return Object.assign({},oldstate,action.reviewUser)
        default:
            return oldstate
    }
}

export default ReviewUserReducer;