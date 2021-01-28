import {connect} from 'react-redux';
import CartedItemShow from './carted_item_show';
import {fetchCartedItem} from '../../actions/carted_item.actions';



const mapStateToProps = (state) => ({
        cartedItem: state.entities.cartedItem,
});

const mapDispatchToProps = dispatch => ({
    fetchCartedItem: cartedItemID => dispatch(fetchCartedItem(cartedItemID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartedItemShow);