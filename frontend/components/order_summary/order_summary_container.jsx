import {connect} from 'react-redux'
import {fetchCurrentUser} from '../../actions/session_action'
import {removeAllCartItems} from '../../actions/cart.actions'
import OrderSummary from './order_summary';
const mapStateToProps = (state,props) => ({
   currentUser:  state.entities.users[props.currentUserSession.id]
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    removeAllCartItems : (cartId) => dispatch(removeAllCartItems(cartId))

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)