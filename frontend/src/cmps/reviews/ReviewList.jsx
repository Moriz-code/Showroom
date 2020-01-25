import React from 'react'
import ReviewPrivew from './ReviewPreview'

export default function ReviewList(props) {
  return (<React.Fragment>
    <div className=" flex space-around">
   
      {props.item.reviews.map(review =>
        <ReviewPrivew review={review}></ReviewPrivew>
      )}

  </div>
  </React.Fragment>)
}
