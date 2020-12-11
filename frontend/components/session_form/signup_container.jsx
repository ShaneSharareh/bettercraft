import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session_action';
import UserForm from './user_form'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
  };
};

const mapDispatchToProps = dispatch => {
   return {
    processUser: (user) => dispatch(createNewUser(user)),
    otherSession: (
      <button className ="signup-login-btn" onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
}

//dont have to depend on state so, no need for mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps)(UserForm)