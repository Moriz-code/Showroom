import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemsList from '../../cmps/items/ItemList'
import { removeFromWishList } from '../../actions/UserActions'
import { addToCart } from '../../actions/OrderActions'
import OrderService from '../../services/OrderService';
import InnerNavBar from '../../cmps/InnerNavBar';
class Wishlist extends Component {

    componentDidMount = () => {

    }

    deleteItem = (itemId) => {
        this.props.removeFromWishList(itemId, this.props.loggedInUser)
    }

    addToCart = (item) => {
        this.deleteItem(item._id)
        this.props.addToCart()
        OrderService.addItemtoCart(item)

    }

    render() {

        return (

            <div className="wishlist">
                <InnerNavBar></InnerNavBar>
                <div className=" container flex column">
                    <p className="wishlist-title flex justify-center">WISHLIST</p>
                    {(this.props.loggedInUser && this.props.loggedInUser.wishlist.length>0) ? <ItemsList addToCart={this.addToCart} deleteItem={this.deleteItem} listMode="wishListMode" items={this.props.loggedInUser.wishlist}>></ItemsList>
                     : 
                     <p>OOPS</p>}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    removeFromWishList,
    addToCart

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wishlist);
