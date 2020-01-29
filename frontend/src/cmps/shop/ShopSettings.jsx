import React from 'react';
import { SketchPicker } from 'react-color';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';
import YoutubeIcon from '../..//styles/assets/logo/youtube.png'


class ShopSettings extends React.Component {
  // export default function ShopSettings(props) 

  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '0.5'
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  // handleClose = () => {
  //   this.setState({ displayColorPicker: false })
  // }


  // <iframe width="420" height="315" src="https://www.youtube.com/embed/A6XUVjK9W4o" frameborder="0" allowfullscreen></iframe>
  render() {

    console.log(this.props);



    // const cover = {
    //   position: 'fixed',
    //   top: '0px',
    //   right: '0px',
    //   bottom: '0px',
    //   left: '0px',
    // }

    const { props } = this;

    return <React.Fragment>

      <h2>Make Your Shop Unique</h2>

      <div class="field">
        <input type="text" id="field-value" className="field-value" name="name" value={props.shop.info.name} alt="info" onChange={props.handleSettingChange} />
        <label for="field-value">Shop Name</label>
      </div>


      <div class="field">
        <input type="text" id="description" name="description" value={props.shop.info.description} alt="info" onChange={props.handleSettingChange} />
        <label for="description">Slogan</label>
      </div>



      <div class="field">
        <input id="bgColor" type="text" style={{ backgroundColor: props.shop.style.bgColor }} value={props.shop.style.bgColorr} onClick={this.handleClick}></input>
        <label for="bgColor">Color</label>
        <div onClick={this.handleClose} className={this.state.displayColorPicker ? '' : 'display-none'}>
          <SketchPicker color={props.shop.style.bgColor} onChange={props.handleColorChange} />
        </div>
      </div>

      <div class="field">
        <input type="file" id="logoUrl" name="logoUrl" alt="style" onChange={props.handleSettingChange} />
        <label for="logoUrl">Logo</label>
      </div>

      <div class="field">
        <input name="imgs" className="uploadImg" name="coverImgUrl" alt="style" onChange={props.handleSettingChange} type="file" />
        {/* <input type="text" name="coverImgUrl" value={props.shop.style.coverImgUrl} alt="style" onChange={props.handleSettingChange} /> */}
        <label for="coverImgUrl">Cover</label>
      </div>

      {/* 
      <div class="form-group">
          <input name="imgs" id="0" onChange={props.handleFormChange} type="file" />
          <input name="imgs" id="1" onChange={props.handleFormChange} type="file" />
          <input name="imgs" id="2" onChange={props.handleFormChange} type="file" />
          <label for="input" class="control-label">Images</label>

        </div> */}


      <div class="field">
        <input type="text" id="instagram" name="instagram" value={props.shop.info.instagram} alt="info" onChange={props.handleSettingChange} />
        <label for="instagram"><img src={InstgaramIcon} alt="icon" /></label>
      </div>

      <div class="field">
        <input id="facebook" type="text" name="facebook" value={props.shop.info.facebook} alt="info" onChange={props.handleSettingChange} />
        <label for="facebook"><img src={FacebookIcon} alt="icon" /></label>
      </div>

      <div class="field">
        <input type="text" id="videoUrl" name="videoUrl" value={props.shop.style.videoUrl} alt="style" onChange={props.handleSettingChange} />
        <label for="videoUrl"><img src={YoutubeIcon} alt="icon" /></label>
      </div>

      {/* <div class="field"> */}
      {/* </div> */}




      <button className="save-btn" onClick={props.onSaveSettings}>Save the Magic!</button>
      <div>

      </div>

    </React.Fragment>
  }

}

export default ShopSettings

