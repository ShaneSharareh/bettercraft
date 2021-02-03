import {connect} from 'react-redux'
import {fetchReviewUser} from '../../actions/review_user.actions'
import ReviewIndexItem from './review_index_item';
import { updateReview, deleteReview } from '../../actions/product_actions';

const mapStateToProps = (state,props) => ({
   reviewUser:  state.entities.reviewUser[props.review.reviewer_id],
   currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
    fetchReviewUser: (reviewerId) => dispatch(fetchReviewUser(reviewerId)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem)