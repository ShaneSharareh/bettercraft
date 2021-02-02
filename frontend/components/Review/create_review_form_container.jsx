import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/product_actions';


const mapStateToProps = (state) =>({
    currentUserId: state.session.currentUserId,
    currentUserSession: state.session
});

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);