import {connect} from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct, fetchReviews} from '../../actions/product_actions';
import {createCartedItem} from '../../actions/carted_item.actions'
import {receiveCurrent} from '../../actions/session_action'


const mapStateToProps = (state, ownProps) => ({
        productId: ownProps.match.params.productId,
        product: state.entities.products[ownProps.match.params.productId],
        reviews:  Object.values(state.entities.reviews),
        currentUserSession: state.session

});

const mapDispatchToProps = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createCartedItem: cartedItem => dispatch(createCartedItem(cartedItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);