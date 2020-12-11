import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout, openModal}) => {
    const authLinks = () =>(
        <nav >
        <button className ="login-logout-btn" onClick={() => openModal('login')}>Login</button>
        </nav>
    );
    const greetingMessage = ()=> (
            <button className ="login-logout-btn" onClick={logout}>Logout</button>
    );

    if(currentUser){
        return greetingMessage()
    }else{
        return authLinks()
    }
};

export default Greeting