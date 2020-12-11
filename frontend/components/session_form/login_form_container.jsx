import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {login} from '../../actions/session_action';
import UserForm from './user_form'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors}) =>{
    return {
        errors: errors.session,
        formType: 'Login',
    }
}

const mapDispatchToProps = dispatch => {
  return {
    processUser: (user) => dispatch(login(user)),
    otherSession: (
      <button className="signup-login-btn" onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
