import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {
    const authLinks = () =>(
        <nav >
            <Link className="session-header" to="/login">Login</Link>
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