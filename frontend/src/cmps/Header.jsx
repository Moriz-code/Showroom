import React, { Component } from 'react';
// import NavBar from './NavBar';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../styles/imgs/logo-red.png';
import { NavLink } from 'react-router-dom'
import Search from '../cmps/items/Search';
import cover from '../styles/assets/imgs/coverPhoto.jpg'
import bell from '../styles/assets/imgs/icons/notification.png'
import wishlist from '../styles/assets/imgs/heart-white.png'
import cart from '../styles/assets/imgs/shopping-cart-white.png'
import SocketService from '../services/SocketService'
import OrderService from '../services/OrderService'


class Header extends Component {

  state = {
    isTop: true,
    newOrders: 0
  };



  componentDidMount() {
    const listenToOrders = (this.props.loggedInUser && this.props.loggedInUser.shopId !== '') ?
      this.listenToOrders() : null

    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }



  componentWillMount = () => {
    SocketService.terminate()
  }

  listenToOrders = () => {
    SocketService.setup()
    SocketService.on('order-complete', this.loadMyOrders)
  }

  loadMyOrders = async () => {


    const orders = await OrderService.getMyOrders(this.props.loggedInUser.shopId)
    const newOrders = orders.find(order => !order.isRead)
    console.log('newOrders', newOrders);

    if (newOrders) await this.setState({ newOrders: 1 })

  }




  render() {
    return <React.Fragment>
      <div className="main-header" >
        <div className={this.state.isTop ? 'down nav-icon flex end align-center' : 'up nav-icon flex end align-center'} >

          <div className="nav-text">

            <span><NavLink to='/item' className="nav-text" exact>Explore</NavLink></span>
            <span><NavLink to='/' className="nav-text" exact>My Shop</NavLink></span>
              
          {this.props.loggedInUser === null ? <NavLink to='/login' className="inner-nav-text" exact> Login</NavLink> :
                        <button onClick={this.props.logout}>LogOut</button>}


            {this.props.loggedInUser && this.props.loggedInUser.shopId !== "" ?
              <span><NavLink to='/dashboard' className="inner-nav-text" exact><img className="bell-icon" src={bell} />
                <span className="notification-seller-badge">{this.state.newOrders}</span>
              </NavLink></span>



              : ''}
          </div>






          <ul className="menu-icons flex align-center">
            <li><NavLink activeClassName="active" to='/wishlist' exact><img src={wishlist} /></NavLink></li>
            <li><NavLink activeClassName="active" to='/cart' exact><img src={cart} /> <span></span></NavLink></li>
          </ul>
        </div>
        <img className="cover-photo" src={cover} />
        <div className="header-text-search flex column justify-center align-center">
          <div className="headlines ">
            <h1 className="showRoom-title text-flicker-in-glow">ShowRoom.</h1>
            <h3 className="marketplace-title text-flicker-in-glow">Marketplace</h3>
          </div>
          <Search></Search>

          <div className="labels">
            <button>Dress</button>
            <button>Black</button>
            <button>Boho</button>
            <button>Hipster</button>
            <button>Accessories</button>
            <button>Summer</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}




const mapStateToProps = state => {
  return {
    loggedInUser: state.user.loggedInUser,

  };
};

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
