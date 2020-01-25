import React from 'react';
// import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

export default function EditItem(props) {

  const { item } = props
  return <React.Fragment>


    <div className="edit-item container">

      <div className="img">
        <img src={item.imgs[0]} />
      </div>

      <div className="details">

        <div class="form-group">
          <input required="required" type="text" name="title" value={item.title} onChange={props.handleFormChange} />
          <label for="input" class="control-label">Title</label><i class="bar"></i>
        </div>


        <div class="form-group">
          <input required="required" type="text" name="description" value={item.description} onChange={props.handleFormChange} />
          <label for="input" class="control-label">Description</label><i class="bar"></i>
        </div>

        <div class="form-group">
          <input required="required" type="text" name="Price" value={item.Price} onChange={props.handleFormChange} />
          <label for="input" class="control-label">Price</label><i class="bar"></i>
        </div>

        <div class="form-group">
          <input required="required" type="text" name="Price" value={item.Price} onChange={props.handleFormChange} />
          <label for="input" class="control-label">Size and Fit</label><i class="bar"></i>
        </div>


        <div class="form-group">
          <select type="text" name="size" value={item.size} onChange={props.handleFormChange}>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
          <label for="select" class="control-label">Size</label><i class="bar"></i>
        </div>



        <div class="form-radio" onChange={props.handleFormChange}>
          Gender
          <div class="radio" >
            <label>
              <input type="radio" name="gender" value="female" checked={item.gender === 'female' ? 'checked' : ''} /><i class="helper"></i>Female
           </label>
          </div>

          <div class="radio">
            <label>
              <input type="radio" name="gender" value="male" checked={item.gender === 'male' ? 'checked' : ''} /><i class="helper"></i>Male
        </label>
          </div>

          <div class="radio">
            <label>
              <input type="radio" name="gender" value="unisex" checked={item.gender === 'unisex' ? 'checked' : ''} /><i class="helper"></i>Unisex
        </label>

          </div>
          <button className="save-item" onClick={props.onSaveItem}>Save the ITEM</button>
        </div>



        <div className="form-labels" onChange={props.handleFormChange}>
          Labels
      <div class="checkbox">
            <label>
              <input type="checkbox" name="labels" value="summer" checked="checked" /><i class="helper"></i>Summer
      </label>
            <label>
              <input type="checkbox" name="labels" value="winter" checked="checked" /><i class="helper"></i>winter
      </label>
            <label>
              <input type="checkbox" name="labels" value="colorful" checked="checked" /><i class="helper"></i>colorful
      </label>
            <label>
              <input type="checkbox" name="labels" value="hipster" checked="checked" /><i class="helper"></i>hipster
      </label>
            <label>
              <input type="checkbox" name="labels" value="dark" checked="checked" /><i class="helper"></i>dark
      </label>
            <label>
              <input type="checkbox" name="labels" value="daily" checked="checked" /><i class="helper"></i>daily
      </label>
            <label>
              <input type="checkbox" name="labels" value="boho" checked="checked" /><i class="helper"></i>boho
      </label>
            <label>
              <input type="checkbox" name="labels" value="minimal" checked="checked" /><i class="helper"></i>minimal
      </label>
          </div>

        </div>

        Images URL:
        <input type="text" name="imgs" value={item.imgs[0]} onChange={props.handleFormChange} />
        <input type="text" name="imgs" value={item.imgs[1]} onChange={props.handleFormChange} />
        <input type="text" name="imgs" value={item.imgs[2]} onChange={props.handleFormChange} />



        <button className="save-item" onClick={props.onSaveItem}>Save the ITEM</button>
      </div>

      {/* <input type="text" name="gender" value={item.gender} onChange={props.handleFormChange} /> */}

      {/* array */}


      {/* Summer <input type="checkbox" name="labels" value="summer" onChange={props.handleFormChange} />
        dress  <input type="checkbox" name="labels" value="dress" onChange={props.handleFormChange} />
        Fun <input type="checkbox" name="labels" value="Fun" onChange={props.handleFormChange} />
        Winter  <input type="checkbox" name="labels" value="Winter" onChange={props.handleFormChange} />

  
        <br></br> */}
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
