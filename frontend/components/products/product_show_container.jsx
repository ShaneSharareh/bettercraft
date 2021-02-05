import {connect} from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct, fetchReviews} from '../../actions/product_actions';
import {createCartedItem, removeCartedItemErrors} from '../../actions/carted_item.actions'
import {receiveCurrent} from '../../actions/session_action'
import {openModal} from '../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => ({
        productId: ownProps.match.params.productId,
        product: state.entities.products[ownProps.match.params.productId],
        reviews:  Object.values(state.entities.reviews),
        currentUserSession: state.session,
        cartedItemsErrors: state.entities.cartedItemsErrors,

});

const mapDispatchToProps = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createCartedItem: cartedItem => dispatch(createCartedItem(cartedItem)),
    openModal: modal => dispatch(openModal(modal)),
    removeCartedItemErrors: ()=> dispatch(removeCartedItemErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);