import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import logo from '../styles/imgs/logo-red.png';
import { NavLink } from 'react-router-dom'
import Search from '../cmps/items/Search';

import wishlist from '../styles/imgs/heart (4).svg'
import bag from '../styles/imgs/shopping-bag (1).svg'



class Header extends Component {
  render() {
    return <React.Fragment>
      <div>
        <div className="nav-icon flex">
          <span><NavLink to='/item' className="nav-text" exact>Shop</NavLink></span>
          <ul className="menu-icons flex">
            <li><NavLink activeClassName="active" to='/wishlist' exact><img src={wishlist} /></NavLink></li>
            <li><NavLink activeClassName="active" to='/cart' exact><img src={bag} /> <span></span></NavLink></li>
          </ul>
        </div>
        <img className="cover-photo" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/385-mj-0324.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=4e003af73294b12d4235a8afe34379aa" />
        <div className="header-text-search flex column justify-center align-center">
          <img className="main-logo" src={logo} />
          <Search></Search>
        </div>
      </div>
    </React.Fragment>
  }
}


export default (Header)


