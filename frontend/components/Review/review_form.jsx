import { isFunction } from 'jquery';
import React from 'react';

/*
Export a `ReportForm` presentational component that creates a form to either
create or edit a report (it will be used by two separate containers). The form
should indicate whether it is a create or edit form based on the `formType`
prop. The form should initialize state to the `report` passed in from props. Use
controlled inputs and trigger the `action` passed in from the container upon
submission. Use a text input for the understanding field and a textarea for the
improvement field.
*/

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            product_id: this.props.productId,
            reviewer_id: this.props.currentUserId,
            body: "",
            error: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }
           
    componentWillUnmount() {
        this.props.removeError()
    }


    handleSubmit(e){
        // Error handling in the frontend
        e.preventDefault();
        if(this.state.body ===""){
             this.setState({error: "Please enter a review"})
        }else{
            if(this.state.error !==""){
                this.setState({error: ""})
            }
            this.props.createReview(this.state)
            this.setState({body: ""})
        }
    }
    render(){
        return ( 
            this.props.currentUserSession.id !== null ?
            <form onSubmit={this.handleSubmit}>
              <div className="add-comment-btn-container">
                   <p className="errors-review">
                        {this.state.error}
                    </p>
                <label>
                    <textarea className = "create-review-box"
                    value = {this.state.body}
                    onChange = {this.update('body')}
                    placeholder= "Write a review!"
                    />
                </label>
              
                <input className="add-comment-button" type="submit" value= "Add Review"/>
                    
                </div>
            </form>
            :
            <div></div>
        )
    }
}

export default ReviewForm