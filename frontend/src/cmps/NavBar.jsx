import React from 'react';
import { NavLink } from 'react-router-dom'




export default function NavBar() {


    return <React.Fragment>

        <div className="">
        {/* <a herf='/' class="logo">LOGO</a> */}
        {/* <input class="menu-btn" type="checkbox" id="menu-btn" /> */}
        {/* <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label> */}

        <span><NavLink to='/item' exact>Shop</NavLink></span>
     
        </div>
    </React.Fragment>
}

