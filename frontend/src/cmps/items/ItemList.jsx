import React from 'react'

import ItemPreview from '../items/ItemPreview'
import { withRouter } from "react-router";

function ItemList({items}) {
  
  return <ul>{items.length > 0 ? items.map(item => <ItemPreview key={item._id} item={item}></ItemPreview>) : 'No items'}</ul>
}
export default withRouter(ItemList)