import {connect} from 'react-redux';
import CartedItemShow from './carted_item_show';
import {removeCartedItem, updateCartedItem, createCartedItem, fetchCartedItems} from '../../actions/carted_item.actions';
import {fetchProduct} from '../../actions/product_actions';



const mapStateToProps = (state,props) => ({
    product: state.entities.products[props.productId]

});

const mapDispatchToProps = dispatch => ({
        fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchCartedItems: () => dispatch(fetchCartedItems()),

    // fetchCartedItem: cartedItemID => dispatch(fetchCartedItem(cartedItemID)),
      removeCartedItem: (cartedItemID) => dispatch(removeCartedItem(cartedItemID)),
    updateCartedItem: (cartedItem) => dispatch(updateCartedItem(cartedItem)),
    //for adding more quantities
    createCartedItem: cartedItem => dispatch(createCartedItem(cartedItem)),


});

export default connect(mapStateToProps, mapDispatchToProps)(CartedItemShow);