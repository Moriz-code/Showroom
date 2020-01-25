import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemsList from '../../cmps/items/ItemList'
import { removeFromWishList } from '../../actions/UserActions'
import { addToCart } from '../../actions/OrderActions'
import OrderService from '../../services/OrderService';
import InnerNavBar from '../../cmps/InnerNavBar';
import { Link } from 'react-router-dom'
import Footer from '../../cmps/Footer'

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


                    {this.props.loggedInUser&& this.props.loggedInUser.wishlist.length>0 ?
                        <div>
                            <p className="wishlist-title flex justify-center">WISHLIST</p>
                            <ItemsList addToCart={this.addToCart} deleteItem={this.deleteItem} listMode="wishListMode" items={this.props.loggedInUser.wishlist}></ItemsList>
                        </div>
                        :
                        <div className="wishlist-txt">
                            <p>It seems nothingin here😭</p>
                            <p>Make a wish!</p>
                            <Link to={`/item`}> <button className="btn1">GO SHOPPING</button></Link>

                        </div>}

                </div>
                <Footer></Footer>
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
