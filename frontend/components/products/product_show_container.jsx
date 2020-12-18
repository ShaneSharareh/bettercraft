import {connect} from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct, fetchReviews} from '../../actions/product_actions';
import {receiveCurrent} from '../../actions/session_action'

const mapStateToProps = (state, ownProps) => ({
        product: state.entities.products[ownProps.match.params.productId],
        reviews:  Object.values(state.entities.reviews)
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchReviews: productId => dispatch(fetchReviews(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);