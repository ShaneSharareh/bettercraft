import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview, removeError } from '../../actions/product_actions';


const mapStateToProps = (state) =>({
    currentUserId: state.session.currentUserId,
    currentUserSession: state.session,
    reviewErrors: state.errors.reviewErrors
});

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    removeError: () => dispatch(removeError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);