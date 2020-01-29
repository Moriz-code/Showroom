
import { NavLink, Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import wishlist from '../styles/assets/imgs/heart-white.png'
import cart from '../styles/assets/imgs/shopping-cart-white.png'
import innerLogo from '../styles/imgs/logo-innerNav.png'
import Search from '../cmps/items/Search'
import bell from '../styles/assets/imgs/icons/notification.png'
import OrderService from '../services/OrderService'
import SocketService from '../services/SocketService'
import { logout } from '../actions/UserActions'
class InnerNavBar extends Component {

    state = {
        newOrders: 0

    }

    componentDidMount = () => {
        const listenToOrders=(this.props.loggedInUser&& this.props.loggedInUser.shopId!=='')?
        this.listenToOrders():null
    }

    componentWillUnmount=()=>{
        SocketService.terminate()
    }

    listenToOrders=()=>{
        SocketService.setup()
        SocketService.on('order-complete', this.loadMyOrders)
    }

    loadMyOrders = async () => {


        const orders = await OrderService.getMyOrders(this.props.loggedInUser.shopId)

        const newOrders=orders.find(order=>!order.isRead)
        console.log('newOrders',newOrders);
        
       if (newOrders) await this.setState({ newOrders: 1})


    }



    render() {

        const { itemsInCart, isOwner } = this.props

        return <React.Fragment>


            <div className="inner-nav flex justify-space-between">

                <Link to={`/`} ><p className="inner-logo">ShowRoom.</p></Link>

                <Search></Search>

                <div className="nav-right-side flex align-center">

                    <NavLink to='/item' className="inner-nav-text" exact>Shop</NavLink>
                    {/* {this.state.loggedInUser === undefined ? <NavLink to='/login' className="inner-nav-text" exact> Login</NavLink> :
                        <button onClick={this.props.logout}>LogOut</button>} */}

                    <NavLink to='/login' className="inner-nav-text" exact> Login</NavLink>
                    <button onClick={this.props.logout}>LogOut</button>



                    <span ><NavLink to='/item' className="inner-nav-text" exact>Shop</NavLink></span>
                    {this.props.loggedInUser&&this.props.loggedInUser.shopId!=="" ?

                        <span><NavLink to='/dashboard' className="inner-nav-text" exact><img className="bell-icon" src={bell} />
                            <span className="notification-seller-badge">{this.state.newOrders}</span>
                        </NavLink></span>
                        :
                        <span><NavLink to='/' className="inner-nav-text" exact>My shop</NavLink></span>
                    }
                    <ul className="inner-nav-icons flex align-center">
                        <li><NavLink activeClassName="active" to='/wishlist' exact><img src={wishlist} /></NavLink></li>

                        <li className="cart"><NavLink activeClassName="active" to='/cart' exact>
                            <span className="notification-badge">{itemsInCart}</span>
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
        itemsInCart: state.order.itemsInCart,
        loggedInUser: state.user.loggedInUser,

    };
};

const mapDispatchToProps = {
    logout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InnerNavBar);