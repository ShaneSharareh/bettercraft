import {connect} from 'react-redux'
import {fetchCartedItems, removeCartedItem} from '../../actions/carted_item.actions'
import CartedItems from './carted_items'
const mapStateToProps = (state,ownProps) => ({
   cartedItems:  state.entities.cartedItems
});

const mapDispatchToProps = dispatch => ({
    fetchCartedItems: () => dispatch(fetchCartedItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartedItems)