import {connect} from 'react-redux'
import {fetchCurrentUser} from '../../actions/session_action'
import ReviewIndexItem from './review_index_item';
const mapStateToProps = (state,props) => ({
   currentUser:  state.entities.users[props.currentUserSession.id]
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem)