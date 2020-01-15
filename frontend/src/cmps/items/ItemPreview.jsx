import React from 'react'

export default function ItemPreview(item) {
  return (
    <li>
      <img src={item.imgs} />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </li>
  )
}
 