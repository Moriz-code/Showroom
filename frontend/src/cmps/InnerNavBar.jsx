
import { NavLink, Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import wishlist from '../styles/assets/imgs/heart-white.png'
import cart from '../styles/assets/imgs/shopping-cart-white.png'
import innerLogo from '../styles/imgs/logo-innerNav.png'
import Search from '../cmps/items/Search'

class InnerNavBar extends Component {
    render() {
        const { itemsInCart } = this.props
        return <React.Fragment>


            <div className="inner-nav flex justify-space-between">

                <Link to={`/`} ><p className="inner-logo">ShowRoom</p></Link>

                <Search></Search>

                <div className="nav-right-side flex align-center">

                    <span ><NavLink to='/item' className="inner-nav-text" exact>Shop</NavLink></span>
                    <span><NavLink to='/' className="inner-nav-text" exact>Become a seller</NavLink></span>

                    <ul className="inner-nav-icons flex align-center">
                        <li><NavLink activeClassName="active" to='/wishlist' exact><img src={wishlist} /></NavLink></li>

                        <li className="cart"><NavLink activeClassName="active" to='/cart' exact>
                  <span class="notification-badge">{itemsInCart}</span>
                            <img className="cart-icon" src={cart} />
                        </NavLink>
                        </li>

                    </ul>
                </div>
            </div>


        </React.Fragment>
    }

}



const mapStateToProps = state => {
    return {
        itemsInCart: state.order.itemsInCart
    };
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InnerNavBar);