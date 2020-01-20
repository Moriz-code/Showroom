import React from 'react';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';






export default function ShopSettings(props) {


  // <iframe width="420" height="315" src="https://www.youtube.com/embed/A6XUVjK9W4o" frameborder="0" allowfullscreen></iframe>
  
  return <React.Fragment>

    {/* info edit */}
    <input type="text" name="name" value={props.shop.info.name} alt="info" onChange={props.handleSettingChange} />
    <br/>
    <input type="text" name="description" value={props.shop.info.description} alt="info" onChange={props.handleSettingChange} />
    <br/>
    <img src={InstgaramIcon} className="insta-icon" alt="icon" />
    
    <input type="text" name="instagram" value={props.shop.info.instagram} alt="info" onChange={props.handleSettingChange} />
    <br/>
    <img src={FacebookIcon} className="fb-icon" alt="icon" />
    <input type="text" name="facebook" value={props.shop.info.facebook} alt="info" onChange={props.handleSettingChange} />

    <br/>
    {/* style edit */}
    background color:
    <input type="color" name="bgColor" value={props.shop.style.bgColor} alt="style" onChange={props.handleSettingChange} />

    <br/>
    logo url:
    <input type="text" name="logoUrl" value={props.shop.style.logoUrl} alt="style" onChange={props.handleSettingChange} />

    <br/>
    cover Image:
    <input type="text" name="coverImgUrl" value={props.shop.style.coverImgUrl} alt="style" onChange={props.handleSettingChange} />

    <br/>
    videoUrl
    <input type="text" name="videoUrl" value={props.shop.style.videoUrl} alt="style" onChange={props.handleSettingChange} />

    {/* in develop: dark mode , themes */}


    <br/>
    <button onClick={props.onSaveSettings}>Make the Magic!</button>

  </React.Fragment>
}

