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

    renderErrors() {
    return(
      <ul>
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
            <div >  
                 <div className= "current-next-session">
                       <div className ="form-type">
                        <h4> {this.props.formType} </h4>
                        </div>
                       <div className ="form-next">
                         {this.props.otherSession}
                        </div>

                    </div>
                <form className = "user-form" onSubmit={this.handleSubmit}>
            
                    <br/>
                    {this.renderErrors()}
                    <br/>
                    <p>
                      {/* Please {this.props.formType} or  */}
                    </p>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div className = "input-headers">Username:</div> 
                        <input 
                        type="text" 
                        placeholder = "Username"
                        value = {this.state.username}
                        onChange={this.handleInput('username')}/>
                    <br/>
                    <div className = "input-headers">Email:</div> 
                        <input 
                        type="text" 
                        value = {this.state.email}
                        onChange={this.handleInput('email')}/>
                    <br/>

                    <div className = "input-headers">Password:</div> 
                        <input 
                        type="password" 
                        value = {this.state.password}
                        onChange={this.handleInput('password')}/>
                    <br/>

                    <input className="submit-button" type="submit" value={this.props.formType}/>
                </form>

            </div>
        )
    }
}

export default withRouter(UserForm);