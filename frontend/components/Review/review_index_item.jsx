import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
     componentDidMount(){
      this.props.fetchReviewUser(this.props.review.reviewer_id)
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
                    <p className="review-body">{this.props.review.body}</p>
               </div>
            </div>
        </div>
        :
        <div></div>
    )};
};

export default ReviewIndexItem;
