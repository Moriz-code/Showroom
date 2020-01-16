import React from 'react'

import ItemPreview from '../items/ItemPreview'
import { withRouter } from "react-router";

function ItemList(items) {
  console.log('itemsList', items.items);
  let itemsToShow = items.items
  return <ul>{itemsToShow.length > 0 ? itemsToShow.map(item => <ItemPreview key={item._id} item={item}></ItemPreview>) : 'No items'}</ul>
}
export default withRouter(ItemList)