import React from 'react';
import {Link} from 'react-router-dom';
import {  withRouter} from 'react-router-dom';


const Greeting = ({currentUser, logout, openModal}) => {
    const logoutUser =() =>{
        //code to reroute user
        logout().then(
            ()=> {  location.href='#/'}
        )

    }
    const authLinks = () =>(
        <nav >
        <button className ="login-logout-btn" onClick={() => openModal('login')}>Login</button>
        </nav>
    );
    const greetingMessage = ()=> (
            <button className ="login-logout-btn" onClick={()=> logoutUser()}>Logout</button>
    );

    if(currentUser){
        return greetingMessage()
    }else{
        return authLinks()
    }
};

export default withRouter(Greeting)