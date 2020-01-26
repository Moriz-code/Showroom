import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import logo from '../styles/imgs/logo-red.png';
import { NavLink } from 'react-router-dom'
import Search from '../cmps/items/Search';

import wishlist from '../styles/assets/imgs/heart-white.png'
import cart from '../styles/assets/imgs/shopping-cart-white.png'
import cover from '../styles/assets/imgs/coverPhoto.jpg'


class Header extends Component {

  state = {
    isTop: true,
  };


  
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }


  render() {
    return <React.Fragment>
      <div className="main-header" >
        <div className= {this.state.isTop ? 'down nav-icon flex end align-center' : 'up nav-icon flex end align-center'} >

          <div className="nav-text">
          <span><NavLink to='/item' className="nav-text" exact>Shop</NavLink></span>
          <span><NavLink to='/' className="nav-text" exact>Become a seller</NavLink></span>
          </div>
          

          <ul className="menu-icons flex align-center">
            <li><NavLink activeClassName="active" to='/wishlist' exact><img src={wishlist} /></NavLink></li>
            <li><NavLink activeClassName="active" to='/cart' exact><img src={cart} /> <span></span></NavLink></li>
          </ul>
        </div>
        <img className="cover-photo" src={cover}/>
        <div className="header-text-search flex column justify-center align-center">
          <div className="headlines ">
          <h1 className="showRoom-title text-flicker-in-glow">ShowRoom.</h1>
          <h3 className="marketplace-title text-flicker-in-glow">Marketplace</h3>
          </div>
          <Search></Search>
        </div>
      </div>
    </React.Fragment>
  }
}


export default (Header)


