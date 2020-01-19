import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemsList from '../../cmps/items/ItemList'
import { removeFromWishList } from '../../actions/UserActions'
import OrderService from '../../services/OrderService';
class Wishlist extends Component {

    componentDidMount = () => {

    }

    deleteItem = (itemId) => {
        this.props.removeFromWishList(itemId, this.props.loggedInUser)
    }

    addToCart=(item)=> {
        this.deleteItem(item._id)
        OrderService.addItemtoCart(item)

    }

    render() {

        return (
            <div>
                <ItemsList addToCart={this.addToCart} deleteItem={this.deleteItem} listMode="wishListMode" items={this.props.loggedInUser.wishlist}>></ItemsList>
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
    removeFromWishList

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wishlist);
