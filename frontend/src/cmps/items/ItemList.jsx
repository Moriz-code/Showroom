import React from 'react'

import ItemPreview from '../items/ItemPreview'
import { withRouter } from "react-router";

function ItemList({ items, listMode, deleteItem ,addToCart}) {

  return <ul className="cards-container">{items.length > 0 ? items.map(item => <ItemPreview addToCart={addToCart} deleteItem={deleteItem} listMode={listMode} key={item._id} item={item}  ></ItemPreview>) : 'No items'}  </ul>
}
export default withRouter(ItemList)