import React from 'react';
import { NavLink } from 'react-router-dom'

import cart from '../styles/assets/imgs/icons/006-cart.png';
import user from '../styles/assets/imgs/icons/004-user.png';
import heart from '../styles/assets/imgs/icons/001-heart.png';


export default function NavBar() {


    return <React.Fragment>
        <div className="container">
        <a to='/' class="logo">LOGO</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <span><NavLink to='/item' exact>Shop</NavLink></span>
        <ul className="menu">
            {/* <li><NavLink activeClassName="active" to='/' exact>About Us</NavLink></li> */}
            <li><NavLink activeClassName="active" to='/login' exact><img src={user}/></NavLink></li>
            <li><NavLink activeClassName="active" to='/wishlist' exact><img src={heart}/></NavLink></li>
            <li><NavLink activeClassName="active" to='/cart' exact><img src={cart}/> <span></span></NavLink></li>
        </ul>
        </div>
    </React.Fragment>
}

