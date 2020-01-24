import React from 'react';
import { TwitterPicker } from 'react-color';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';
import YoutubeIcon from '../..//styles/assets/logo/youtube.png'


class ShopSettings extends React.Component {
  // export default function ShopSettings(props) 

  state = {
    displayColorPicker: false
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    console.log(this.state.displayColorPicker);

    this.setState({ displayColorPicker: false })
  }


  // <iframe width="420" height="315" src="https://www.youtube.com/embed/A6XUVjK9W4o" frameborder="0" allowfullscreen></iframe>
  render() {


    // const cover = {
    //   position: 'fixed',
    //   top: '0px',
    //   right: '0px',
    //   bottom: '0px',
    //   left: '0px',
    // }

    const { props } = this;

    return <React.Fragment>
      <div className="modal-content">
        <br></br>
        <h2>Make your Shop unique</h2>

        <div class="field">
          <input type="text" id="field-value" className="field-value" name="name" value={props.shop.info.name} alt="info" onChange={props.handleSettingChange} />
          <label for="field-value">Shop Name</label>
        </div>


        <div class="field">
          <input type="text" id="description" name="description" value={props.shop.info.description} alt="info" onChange={props.handleSettingChange} />
          <label for="description">Description</label>
        </div>


        <div class="field">
          <input type="text" id="logoUrl" name="logoUrl" value={props.shop.style.logoUrl} alt="style" onChange={props.handleSettingChange} />
          <label for="logoUrl">Logo Url</label>
        </div>

        <div class="field">
          <input type="text" name="coverImgUrl" value={props.shop.style.coverImgUrl} alt="style" onChange={props.handleSettingChange} />
          <label for="coverImgUrl">Cover Url</label>
        </div>

        <div class="field">
          <input type="text" id="instagram" name="instagram" value={props.shop.info.instagram} alt="info" onChange={props.handleSettingChange} />
          <label for="instagram"><img src={InstgaramIcon} className="insta-icon" alt="icon" /></label>
        </div>

        <div class="field">
          <input id="facebook" type="text" name="facebook" value={props.shop.info.facebook} alt="info" onChange={props.handleSettingChange} />
          <label for="facebook"><img src={FacebookIcon} className="fb-icon" alt="icon" /></label>
        </div>

        <div class="field">
          <input type="text" id="videoUrl" name="videoUrl" value={props.shop.style.videoUrl} alt="style" onChange={props.handleSettingChange} />
          <label for="videoUrl"><img src={YoutubeIcon} className="fb-icon" alt="icon" /></label>
        </div>


        <div class="field">
          <input id="bgColor" type="text" style={{ backgroundColor: props.shop.style.bgColor }} value={props.shop.style.bgColorr} onClick={this.handleClick}></input>
          <label for="bgColor">Color</label>


          <div onClick={this.handleClose} className={this.state.displayColorPicker ? '' : 'display-none'}>
            <TwitterPicker onChange={props.handleColorChange} />
          </div>
        </div>

      </div>
      <button className="save-btn" onClick={props.onSaveSettings}>Save the Magic!</button>
      <div>

      </div>
    </React.Fragment>
  }

}

export default ShopSettings

