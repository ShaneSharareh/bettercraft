import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {login} from '../../actions/session_action';
import UserForm from './user_form'


const mapStateToProps = ({ errors}) =>{
    return {
        errors: errors.session,
        formType: 'Login',
        navLink: <Link to="/signup"> Sign Up </Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processUser: (user) =>dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
