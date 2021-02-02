import * as ReviewUserApiUtil from '../util/review_user'
export const RECEIVE_REVIEW_USER = "RECEIVE_REVIEW_USER"


const receiveReviewUser = reviewUser => ({
    type: RECEIVE_REVIEW_USER,
    reviewUser
});

export const fetchReviewUser = (reviewerId) => dispatch =>(
    ReviewUserApiUtil.fetchReviewUser(reviewerId)
    .then(reviewUser => dispatch(receiveReviewUser(reviewUser)))
)
