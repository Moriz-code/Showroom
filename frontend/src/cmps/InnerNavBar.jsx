
import { NavLink, Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import wishlist from '../styles/imgs/heart (4).svg'
import bag from '../styles/imgs/shopping-bag (1).svg'
import innerLogo from '../styles/imgs/logo-innerNav.png'

class InnerNavBar extends Component {
    render() {
        const {itemsInCart}=this.props
        return <React.Fragment>


            <div className="inner-nav flex align-center">
                <Link to={`/`} ><img className="inner-logo" src={innerLogo} /></Link>
                <span ><NavLink to='/item' className="inner-nav-text" exact>Shop</NavLink></span>
                <ul className="inner-nav-icons flex align-center">
                    <li><NavLink activeClassName="active" to='/wishlist' exact><img src={wishlist} /></NavLink></li>
                    <li><NavLink activeClassName="active" to='/cart' exact><span class="notification-badge">{itemsInCart}</span> <img src={bag} />  </NavLink></li>

                </ul>
            </div>


        </React.Fragment>
    }

}



const mapStateToProps = state => {
    return {
        itemsInCart:state.order.itemsInCart
    };
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InnerNavBar);