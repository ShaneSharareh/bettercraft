import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = (props) => {
    return (
        <div className="review-element">
             <div className="review-author">
                 <img src="https://i.pinimg.com/originals/b8/3a/bb/b83abbca857139568bb690c69d7bad68.jpg" alt=""/>
                <a href="#" >annonymous</a>
            </div>
            <p className="review-body">{props.review.body}</p>
        </div>
    );
};

export default ReviewIndexItem;