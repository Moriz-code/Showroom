import React from 'react'

import ItemPreview from '../items/ItemPreview'
import { withRouter } from "react-router";

function ItemList({ items, listMode, deleteItem, editItem, addToCart }) {
  // console.log(items)
  return <React.Fragment>

    <div className="cards-container">
      {items ? items.map(item =>
        <ItemPreview editItem={editItem} deleteItem={deleteItem} addToCart={addToCart} listMode={listMode} key={item._id} item={item}  >
        </ItemPreview>) : 'No items'}  </div>
       
  </React.Fragment>

}
export default withRouter(ItemList)