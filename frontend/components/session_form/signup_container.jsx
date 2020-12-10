import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session_action';
import UserForm from './user_form'

import React from 'react';
import { Link } from 'react-router-dom';
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Login</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return{  processUser: user => dispatch(createNewUser(user))
    }
}

//dont have to depend on state so, no need for mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps)(UserForm)