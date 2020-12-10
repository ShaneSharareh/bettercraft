import React from 'react';

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
        this.props.processUser(user)
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
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    {this.renderErrors()}
                    <br/>
                    <p>
                      Please {this.props.formType} or {this.props.navLink}

                    </p>
                    <label>Username: 
                        <input 
                        type="text" 
                        value = {this.state.username}
                        onChange={this.handleInput('username')}/>
                    </label>
                    <label>Email: 
                        <input 
                        type="text" 
                        value = {this.state.email}
                        onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password: 
                        <input 
                        type="password" 
                        value = {this.state.password}
                        onChange={this.handleInput('password')}/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>

            </div>
        )
    }
}

export default UserForm;