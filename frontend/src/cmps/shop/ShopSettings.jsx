import React from 'react';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';

export default function ShopSettings(props) {
  return <React.Fragment>

    {/* info edit */}
    <input type="text" name="name" value={props.shop.info.name} alt="info" onChange={props.handleChange} />
    <br/>
    <input type="text" name="description" value={props.shop.info.description} alt="info" onChange={props.handleChange} />
    <br/>
    <img src={InstgaramIcon} className="insta-icon" alt="icon" />
    
    <input type="text" name="instagram" value={props.shop.info.instagram} alt="info" onChange={props.handleChange} />
    <br/>
    <img src={FacebookIcon} className="fb-icon" alt="icon" />
    <input type="text" name="facebook" value={props.shop.info.facebook} alt="info" onChange={props.handleChange} />

    <br/>
    {/* style edit */}
    background color:
    <input type="color" name="bgColor" value={props.shop.style.bgColor} alt="style" onChange={props.handleChange} />

    <br/>
    logo url:
    <input type="text" name="logoUrl" value={props.shop.style.logoUrl} alt="style" onChange={props.handleChange} />

    <br/>
    cover Image:
    <input type="text" name="coverImgUrl" value={props.shop.style.coverImgUrl} alt="style" onChange={props.handleChange} />

    <br/>
    videoUrl
    <input type="text" name="videoUrl" value={props.shop.style.videoUrl} alt="style" onChange={props.handleChange} />

    {/* in develop: dark mode , themes */}


    <br/>
    <button onClick={props.onSave}>Make the Magic!</button>

  </React.Fragment>
}

