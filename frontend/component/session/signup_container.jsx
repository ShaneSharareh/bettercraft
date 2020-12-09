import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session_action';
import Signup from './signup'



const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user))
})

//dont have to depend on state so, no need for mapStateToProps
export default connect(null,mapDispatchToProps)(Signup)