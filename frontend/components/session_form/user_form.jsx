import React from 'react';
import { withRouter } from 'react-router-dom';
class UserForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGuestLogin = this.handleGuestLogin.bind(this)

    }

    componentWillUnmount() {
        this.props.removeError()
    }

    handleInput(field){
        return(e) =>{
            this.setState({
                [field]:e.currentTarget.value
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processUser(user).then(this.props.closeModal);
    }

    handleGuestLogin(e){
        this.props.processUser({
            ['username']: "guest",
            ['email']: "guest@example.com",
            ['password']: "password",
            }).then(this.props.closeModal);
    }

    renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

    render() {
        return (
            <div>  
                 <div className= "current-next-session">
                       <div className ="form-type">
                        <h4> {this.props.formType} </h4>
                        </div>
                       <div className ="form-next">
                         {this.props.otherSession}
                        </div>
                    </div>
                <div className = "user-form-parent">
                    <form className = "user-form" onSubmit={this.handleSubmit}>
                
                        {this.renderErrors()}
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        <div className = "input-headers" id="username-field">Username:</div> 
                            <input 
                            type="text" 
                            value = {this.state.username}
                            onChange={this.handleInput('username')}/>
                        <div className = "input-headers">Email:</div> 
                            <input 
                            type="text" 
                            value = {this.state.email}
                            onChange={this.handleInput('email')}/>

                        <div className = "input-headers">Password:</div> 
                        <input 
                        type="password"
                        value = {this.state.password}
                        onChange={this.handleInput('password')}/>
                        <div className ="bottom-form">
                            <div>
                                <input className="submit-button" type="submit" value={this.props.formType}/>
                            </div>
                            <div>
                                {this.props.formType === "Sign in"?  <button className ="guest-login-btn" onClick={this.handleGuestLogin}>Guest</button> : null}
                            </div>
                        </div>    
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(UserForm);