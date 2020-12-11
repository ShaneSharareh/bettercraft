import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {login, removeError} from '../../actions/session_action';
import UserForm from './user_form'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors}) =>{
    return {
        errors: errors.session,
        formType: 'Sign in',
    }
}

const mapDispatchToProps = dispatch => {
  return {
    processUser: (user) => dispatch(login(user)),
    otherSession: (
      <button className="signup-login-btn" onClick={() => dispatch(openModal('signup'))}>
        Register
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeError: () => dispatch(removeError())

    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
