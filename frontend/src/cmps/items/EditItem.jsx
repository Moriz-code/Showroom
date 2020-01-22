import React from 'react';
// import { connect } from 'react-redux';

export default function EditItem(props) {
  
  return <React.Fragment>
    {/* <input type="text" name="name" value={props.shop.info.name} alt="info" onChange={props.handleChange} /> */}
    Title:
    <input type="text" name="title" value={props.item.title} onChange={props.handleFormChange} />
  <br/>
    Price:
    <input type="text" name="price" value={props.item.price} onChange={props.handleFormChange} />
    <br/>
    Description:
    <input type="text" name="description" value={props.item.description} onChange={props.handleFormChange} />
    <br/>
    size and fit:
    <input type="text" name="sizeFit" value={props.item.sizeFit} onChange={props.handleFormChange} />
    <br/>
    size:
    <input type="text" name="size" value={props.item.size} onChange={props.handleFormChange} />
    <br/>
    gender:
    <input type="text" name="gender" value={props.item.gender} onChange={props.handleFormChange} />
    <br/>
{/* array */}
    labels:

   Summer <input type="checkbox" name="labels" value="summer" onChange={props.handleFormChange}/>
   dress  <input type="checkbox" name="labels" value="dress" onChange={props.handleFormChange}/>
   Fun <input type="checkbox" name="labels" value="Fun" onChange={props.handleFormChange}/>
   Winter  <input type="checkbox" name="labels" value="Winter" onChange={props.handleFormChange}/>
    <br/>
    Images URL:
    <input type="text" name="imgs" value={props.item.imgs[0]} onChange={props.handleFormChange} />
    <input type="text" name="imgs" value={props.item.imgs[1]} onChange={props.handleFormChange} />

    <br/>
    <button className="btn2" onClick={props.onSaveItem}>Save the new ITEM</button>
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
