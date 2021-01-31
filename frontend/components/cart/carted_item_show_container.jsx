import {connect} from 'react-redux';
import CartedItemShow from './carted_item_show';
import {removeCartedItem, updateCartedItem, createCartedItem} from '../../actions/carted_item.actions';



const mapStateToProps = (state,props) => ({
    
});

const mapDispatchToProps = dispatch => ({
    // fetchCartedItem: cartedItemID => dispatch(fetchCartedItem(cartedItemID)),
    removeCartedItem: (cartedItemID) => dispatch(removeCartedItem(cartedItemID)),
    updateCartedItem: (cartedItem) => dispatch(updateCartedItem(cartedItem)),
    //for adding more quantities
    createCartedItem: cartedItem => dispatch(createCartedItem(cartedItem)),


});

export default connect(mapStateToProps, mapDispatchToProps)(CartedItemShow);