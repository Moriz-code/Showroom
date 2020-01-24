import React from 'react'
import ReviewRating from '../reviews/ReviewRating'
import Avatar from '@material-ui/core/Avatar';
export default function ReviewPreview(props) {

  

  return  <React.Fragment>
    <ul className="review-item">
    <li className="review-avatar">
     <Avatar className="avatar" src={props.review.byUser.imgUrl}></Avatar>
    </li>
    <ul className="review-content">
    <li className="review-title flex">
      {props.review.title}
    <span className="review-rate">
      <ReviewRating rate={props.review.rate/5*100} ></ReviewRating>
    </span>
    </li>
    <li className="review-txt">
      {props.review.txt}
    </li>
    </ul>
    </ul>
    </React.Fragment>
 
}
