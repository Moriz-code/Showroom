import React from 'react';
import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';

export default function ShopSettings(props) {
    return <React.Fragment>
        <div className="coverImg" style={{ backgroundImage: 'url(' + props.selectedShop.style.coverImgUrl + ')' }}></div>
        <div className="shop-header">
            <div className="coverImg" style={{ backgroundImage: 'url(' + props.selectedShop.style.coverImgUrl + ')' }}></div>
            <img className="shop-logo" src={props.selectedShop.style.logoUrl} />
            <h1 className="title">{props.selectedShop.info.name}</h1>
            <h2 className="description">{props.selectedShop.info.description}</h2>
            <h2 className="designer-name">
                Shop Owner <br></br>{props.selectedShop.owner.name}</h2>

            <iframe title="video" className="shop-video" src={props.selectedShop.style.videoUrl}>
            </iframe>

            <div className="insta-icon">
                <a href={props.selectedShop.info.instagram}>
                    <img src={InstgaramIcon} alt="icon" />
                </a>
            </div>

            <div className="fb-icon">
                <a href={props.selectedShop.info.facebook}>
                    <img src={FacebookIcon} alt="icon" />
                </a>
            </div>
        </div>
    </React.Fragment>

}