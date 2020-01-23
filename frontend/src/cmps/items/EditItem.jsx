import React from 'react';
// import { connect } from 'react-redux';

export default function EditItem(props) {

  return <React.Fragment>
    <div className="edit-item container">
      {/* <input type="text" name="name" value={props.shop.info.name} alt="info" onChange={props.handleChange} /> */}
      Title
    <input type="text" name="title" value={props.item.title} onChange={props.handleFormChange} />
    
      Price
    <input type="text" name="price" value={props.item.price} onChange={props.handleFormChange} />
  
      Description
    <input type="text" name="description" value={props.item.description} onChange={props.handleFormChange} />
   
      Size and Fit
    <input type="text" name="sizeFit" value={props.item.sizeFit} placeholder=" What size the model wears? " onChange={props.handleFormChange} />
    
      Size
    <input type="text" name="size" value={props.item.size} onChange={props.handleFormChange} />
 
  

    {/* <input type="text" name="gender" value={props.item.gender} onChange={props.handleFormChange} /> */}
     
      {/* array */}
      Labels:
  
   Summer <input type="checkbox" name="labels" value="summer" onChange={props.handleFormChange} />
      dress  <input type="checkbox" name="labels" value="dress" onChange={props.handleFormChange} />
      Fun <input type="checkbox" name="labels" value="Fun" onChange={props.handleFormChange} />
      Winter  <input type="checkbox" name="labels" value="Winter" onChange={props.handleFormChange} />
    
      Images URL:
    <input type="text" name="imgs" value={props.item.imgs[0]} onChange={props.handleFormChange} />
      <input type="text" name="imgs" value={props.item.imgs[1]} onChange={props.handleFormChange} />

    <br></br>
      <button className="save-item" onClick={props.onSaveItem}>Save the ITEM</button>
    </div>
  </React.Fragment>
}



// item: {
//   _id: '',
//   title: '',
//   price: '',
//   description: '',
//   sizeFit: '',
//   size: '',
//   gender: '',
//   itemOwner: {
//       id: '',
//       name: '',
//       logoUrl: ''
//   },
//   labels: [],
//   imgs: [],
//   reviews: [
//       {
//           byUser: {
//               name: '',
//               id: ''
//           },
//           txt: '',
//           reate: ''
//       }
//   ]
// },
