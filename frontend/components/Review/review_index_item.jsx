import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editStatus: 'off',
            body: this.props.review.body
        }
        this.enableEditField = this.enableEditField.bind(this)
        this.updateReview = this.updateReview.bind(this)
        this.update = this.update.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
    }
     componentDidMount(){
      this.props.fetchReviewUser(this.props.review.reviewer_id)
    }
    enableEditField(){
        this.setState({editStatus:'on'})
    }
    
    
    updateReview(){
        //code 
        this.setState({editStatus:'off'})
        this.props.updateReview({ id:this.props.review.id, product_id:this.props.review.product_id, reviewer_id:this.props.review.reviewer_id, body:this.state.body})
    }


      update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    deleteReview(){
        this.props.deleteReview(this.props.review.id)
    }

// https://picsum.photos/id/237/200/300

    render() {
         console.log("test1")
            console.log(this.props.reviewUser)
             console.log("test2")
    return (
        this.props.reviewUser ? 
           

        <div className="review-element">
             <div className="review-author">
                 <img  src={`http://placekitten.com/${this.props.review.reviewer_id}?100x100`} alt=""/>
               <div>
                    <a href="#" >{this.props.reviewUser.username}</a>
                    {
                        this.state.editStatus === 'on'?
                            <div>
                                <form>
                                    <input type="text" onChange = {this.update('body')} value ={this.state.body}/>
                                    <button onClick={this.updateReview}>Update</button>
                                </form>
                            </div>
                            :
                            <div>
                                <p className="review-body">{this.props.review.body}</p>
                                {this.props.review.reviewer_id === this.props.currentUser.id?
                                <div className="review-author-footers">
                                 <button onClick={this.enableEditField} className="edit-review-btn" >Edit</button>
                                 <button onClick={this.deleteReview} on className="edit-review-btn" >Delete</button>
                                </div>
                                :
                                  <div></div>
                                }
                            </div>

                    }
                    
               </div>
            </div>
        </div>
        :
        <div></div>
    )};
};

export default ReviewIndexItem;
