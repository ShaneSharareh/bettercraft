import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
     componentDidMount(){
      this.props.fetchCurrentUser(this.props.currentUser.id)
    }
// https://picsum.photos/id/237/200/300

    render() {
    return (
        <div className="review-element">
             <div className="review-author">
                 <img  src={`http://placekitten.com/${this.props.currentUser.id}?100x100`} alt=""/>
               <div>
                    <a href="#" >{this.props.currentUser.username}</a>
                    <p className="review-body">{this.props.review.body}</p>
               </div>
            </div>
        </div>
    )};
};

export default ReviewIndexItem;
