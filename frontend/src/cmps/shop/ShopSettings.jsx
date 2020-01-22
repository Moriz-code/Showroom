import React from 'react';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';
import YoutubeIcon from '../..//styles/assets/logo/youtube.png'

export default function ShopSettings(props) {

  // <iframe width="420" height="315" src="https://www.youtube.com/embed/A6XUVjK9W4o" frameborder="0" allowfullscreen></iframe>

  return <React.Fragment>

    <h2>Make your Shop unique like you</h2>

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
    <input style={{ backgroundColor: props.shop.style.bgColor }} type="text" id="bgColor" name="bgColor" value={props.shop.style.bgColor} alt="style" onChange={props.handleSettingChange} /> 
    <label for="bgColor">Color</label>
    </div>

     <button className="btn1 save-btn" onClick={props.onSaveSettings}>Save the Magic!</button> 

  </React.Fragment>
}

