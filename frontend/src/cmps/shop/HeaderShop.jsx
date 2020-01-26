import React from 'react';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';


import settingClose from '../../styles/assets/imgs/right-arrow.png';
import settingOpen from '../../styles/assets/imgs/left-arrow.png'

export default function ShopSettings(props) {
    console.log('shop settings ' , props);
    
    return <React.Fragment>
        <div className="shop-header">
            <button className='shop-edit-btn'>
                <img onClick={props.onEditSettings} src={props.isOnEditSettigs ?  settingOpen : settingClose} />
            </button>
            <div className="coverImg" style={{ backgroundImage: 'url(' + props.selectedShop.style.coverImgUrl + ')' }}>
                <div className="shop-info">
                    <img className="shop-logo" src={props.selectedShop.style.logoUrl} />
                    <div className="details">
                        <h1 className="title">{props.selectedShop.info.name}</h1>
                        <div className="description">{props.selectedShop.info.description}</div>
                        <div className="designer-name">
                            {props.selectedShop.owner.name}</div>

                        <div className="shop-social">
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
                    </div>
                </div>
            </div>
            {/* <iframe id="youtube-player-2" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/IJn-XF1QEPc?origin=https%3A%2F%2Fvivi-tv.com&playsinline=1&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&widgetid=2"></iframe> */}

            <iframe width="1200" height="250" title="video" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="shop-video" src={props.selectedShop.style.videoUrl}>
            </iframe>


        </div>
    </React.Fragment>

}