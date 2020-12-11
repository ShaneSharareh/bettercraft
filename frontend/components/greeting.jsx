import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout, openModal}) => {
    const authLinks = () =>(
        <nav >
        <button onClick={() => openModal('login')}>Login</button>
        </nav>
    );
    const greetingMessage = ()=> (
            <button className="session-header" onClick={logout}>Log Out</button>
    );

    if(currentUser){
        return greetingMessage()
    }else{
        return authLinks()
    }
};

export default Greeting