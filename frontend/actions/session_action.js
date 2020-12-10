import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrent = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
})


const logoutCurrent = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createNewUser = user => dispatch =>(
    APIUtil.postUser(user).then(user =>{
        return dispatch(receiveCurrent(user))},
        err => {
        return dispatch(receiveErrors(err.responseJSON))
        }
        ));


export const login = user => dispatch =>(
    APIUtil.postSession(user).then(user =>{
        return dispatch(receiveCurrent(user))},
      err => {
        return dispatch(receiveErrors(err.responseJSON))
      }
        ));

export const logout = () => dispatch =>(
    APIUtil.deleteSession().then(user =>(
        dispatch(logoutCurrent())
    )) 
);


