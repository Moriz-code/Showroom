
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
import { logout, addShopToUser } from '../actions/UserActions'
import { CreateNewShop } from '../actions/ShopActions'
import { withRouter } from 'react-router'
import Modal from '../cmps/Modal'
class InnerNavBar extends Component {

    state = {
        newOrders: 0,
        modalMsg: "",

    }

    componentDidMount = () => {

        const listenToOrders = (this.props.loggedInUser && this.props.loggedInUser.shopId !== '') ?
            this.listenToOrders() : null
    }

    componentWillUnmount = () => {
        SocketService.terminate()
    }

    listenToOrders = () => {
        SocketService.setup()
        SocketService.on('order-complete', this.loadMyOrders)
    }

    loadMyOrders = async () => {

        const orders = await OrderService.getMyOrders(this.props.loggedInUser.shopId)

        const newOrders = orders.find(order => !order.isRead)

        if (newOrders) {

            await this.setState({ newOrders: 1 })
            await this.setState({ modalMode: true, modalMsg: "You Have a New Order" })
            this.setState({ modalMode: false, modalMsg: "" })

        }
    }


    getShopId = async () => {
        if (!this.props.loggedInUser) return this.props.history.push(`/login`)
        if (this.props.loggedInUser.shopId) {
            this.props.history.push(`/shop/${this.props.loggedInUser.shopId}`)


        }
        else {

            let shop = (this.props.loggedInUser && this.props.loggedInUser.shopId !== "") ? this.props.loggedInUser.shopId :

                await this.props.CreateNewShop(this.props.loggedInUser._id, this.props.loggedInUser.fullName)

            let newUser = await this.props.addShopToUser(shop._id, this.props.loggedInUser)
            this.props.history.push(`/shop/${newUser.shopId}`)
        }
    }


    render() {

        const { itemsInCart } = this.props

        return <React.Fragment>

            <Modal msg={this.state.modalMsg}></Modal>
            <div className="inner-nav flex justify-space-between">

                <Link to={`/`} ><p className="inner-logo">ShowRoom.</p></Link>

                <Search></Search>

                <div className="nav-right-side flex align-center">

                    <NavLink to='/item' className="inner-nav-text" exact>Explore</NavLink>
                    {/* <span><NavLink to='/' className="inner-nav-text" exact>My shop</NavLink></span> */}

                    {this.props.loggedInUser === null ? <NavLink to='/login' className="inner-nav-text" exact> Sign in</NavLink> :
                        <button className="logout" onClick={this.props.logout}>Log out</button>}



                    {/* <span ><NavLink to='/item' className="inner-nav-text" exact>Shop</NavLink></span> */}

                    <span onClick={this.getShopId} className="inner-nav-text">My shop</span>
                    {this.props.loggedInUser && this.props.loggedInUser.shopId !== "" ?

                        <span><NavLink to='/dashboard' className="inner-nav-text" exact><img className="bell-icon" src={bell} />
                            <span className="notification-seller-badge">{this.state.newOrders > 0 && this.state.newOrders}</span>
                        </NavLink></span>

                        : ''}


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
    logout,
    CreateNewShop,
    addShopToUser
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(InnerNavBar))