import React from 'react'
import ReviewPrivew from './ReviewPreview'
export default function ReviewList(props) {
  return (<React.Fragment>
    <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Review</th>
    <th>Rating</th>
    </tr>
    </thead>
    <tbody>
      {props.item.reviews.map(review =>
        <ReviewPrivew review={review}></ReviewPrivew>
      )}
      </tbody>
  </table>
  </React.Fragment>)
}
