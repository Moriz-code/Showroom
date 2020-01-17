import React from 'react';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';

export default function ShopSettings(props) {
  return <div>
    <input type="color" name="bgColor" value={props.shop.style.bgColor} alt="style" onChange={props.handleChange} />
    <input type="text" name="logoUrl" value={props.shop.style.logoUrl} alt="style" onChange={props.handleChange} />
    <img src={InstgaramIcon} className="shop-icon" alt="icon" />
    <img src={FacebookIcon} className="shop-icon" alt="icon" />
    <button onClick={props.onSave}>Make the Magic!</button>
  </div>
}
