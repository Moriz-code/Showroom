import React from 'react'
import { Link } from 'react-router-dom'


export default function ItemPreview({item}) {
  return (<Link to={`/item/${item.id}`}>
    <li className="item-card clean-line">
      <img src={item.imgs[0]} />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </li>
    </Link>
  )
}
 