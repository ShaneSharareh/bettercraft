import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {
    const authLinks = () =>(
        <nav >
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const greetingMessage = ()=> (
        <hgroup >
            <h2 >Hello, {currentUser.username}</h2>
            <button onClick={logout}>Log Out</button>
        </hgroup>
    );

    if(currentUser){
        return greetingMessage()
    }else{
        return authLinks()
    }
};

export default Greeting