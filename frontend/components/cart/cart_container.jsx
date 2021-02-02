import {connect} from 'react-redux'
import {fetchCartedItems} from '../../actions/carted_item.actions'
import Cart from './cart'
const mapStateToProps = (state,ownProps) => ({
   cartedItems:  state.entities.cartedItems,
   loggedInUser: state.session
});

const mapDispatchToProps = dispatch => ({
    fetchCartedItems: () => dispatch(fetchCartedItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)