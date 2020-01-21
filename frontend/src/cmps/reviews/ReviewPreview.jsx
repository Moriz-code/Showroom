import React from 'react'
export default function ReviewPreview(props) {
  return <tr>
    <td>
      {props.review.byUser.name}
    </td>
    <td>
      {props.review.txt}
    </td>
    <td>
      {props.review.rate}
    </td>
  </tr>
}
