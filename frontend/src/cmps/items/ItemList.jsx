import React from 'react'

import ItemPreview from '../items/ItemPreview'
import { withRouter } from "react-router";

function ItemList({ items, listMode, deleteItem, editItem, addToCart }) {
  console.log(items)
  return <React.Fragment>

    <ul className="cards-container">
      {items.length > 0 ? items.map(item =>
        <ItemPreview editItem={editItem} deleteItem={deleteItem} addToCart={addToCart} listMode={listMode} key={item._id} item={item}  >
        </ItemPreview>) : 'No items'}  </ul>

  </React.Fragment>

}
export default withRouter(ItemList)