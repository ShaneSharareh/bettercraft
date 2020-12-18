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
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.createReview(this.state)
    }
    render(){
        return ( 
            <form onSubmit={this.handleSubmit}>
            
                <label>
                    <textarea className = "create-review-box"
                    value = {this.state.body}
                    onChange = {this.update('body')}
                    placeholder= "Write a review!"
                    />
                </label>
                <div>
                <input className="add-comment-button" type="submit" value= "Add Comment"/>
                    
                </div>
            </form>
        )
    }
}

export default ReviewForm