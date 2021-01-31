import {connect} from 'react-redux'
import {fetchCartedItems, updateCartedItem} from '../../actions/carted_item.actions'
import CartedItems from './carted_items'
const mapStateToProps = (state,ownProps) => ({
   cartedItems:  state.entities.cartedItems
});

const mapDispatchToProps = dispatch => ({
    fetchCartedItems: () => dispatch(fetchCartedItems()),
    updateCartedItem : (cartedItem) => dispatch(updateCartedItem(cartedItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartedItems)