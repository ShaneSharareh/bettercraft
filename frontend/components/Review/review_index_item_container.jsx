import {connect} from 'react-redux'
import {fetchReviewUser} from '../../actions/review_user.actions'
import ReviewIndexItem from './review_index_item';
const mapStateToProps = (state,props) => ({
   reviewUser:  state.entities.reviewUser[props.review.reviewer_id],
});

const mapDispatchToProps = dispatch => ({
    fetchReviewUser: (reviewerId) => dispatch(fetchReviewUser(reviewerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem)