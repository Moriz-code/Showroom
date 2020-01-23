import React from 'react'
import Avatar from '@material-ui/core/Avatar';
export default function ReviewPreview(props) {

  

  return <tr>
    <td>
     <Avatar className="avatar">{props.review.byUser.name.substring(0,1).toUpperCase()}</Avatar>
    </td>
    <td>
      {props.review.rate}/5 - 
    </td>
    <td>
      {props.review.txt}
    </td>
  </tr>
}
