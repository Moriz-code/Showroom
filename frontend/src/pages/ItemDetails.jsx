import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentItem } from '../actions/ItemActions';
import {addToWishList} from '../actions/UserActions'
import OrderService from '../services/OrderService';

class ItemDetails extends Component {

    state = {
        imgIndex: 0
    }

    componentDidMount() {
        this.props.setCurrentItem(this.props.match.params.id)
    }

    componentWillUnmount = () => {
        this.props.setCurrentItem(null)

    }

    onBack = () => {
        this.props.history.push('/')
    }

    setMainImg = (imgIndex) => {
        this.setState({ imgIndex })
    }

    onAddToCart = () => {
        console.log(this.props.item,'itemmmmm');
        
        OrderService.addItemtoCart(this.props.item)
    }

    onBuyNow = async () => {
        await OrderService.addItemtoCart(this.props.item)
        this.props.history.push('/cart')
    }


    onAddToWishList = async () => {
        const wishList= await this.props.addToWishList(this.props.item, this.props.loggedInUser)
    }

    render() {
        const { item } = this.props

        return (
            item &&
            <React.Fragment>
                <section className="item-container flex justify-space-around">
                    <div className="item-img container flex">
                        <div className="item-secondary-image flex column justify-space-between">
                            <img className="secondary-img" onClick={() => this.setMainImg(0)} src={item.imgs[0]} alt="itemImg1" />
                            <img className="secondary-img" onClick={() => this.setMainImg(1)} src={item.imgs[1]} alt="itemImg2" />
                            <img className="secondary-img" onClick={() => this.setMainImg(2)} src={item.imgs[2]} alt="itemImg3" />
                        </div>
                        <div className="item-main-image flex">
                            <img className="main-img" src={item.imgs[this.state.imgIndex]} alt="mainImg" />
                        </div>
                    </div>
                    <div className="item-side-details flex column">
                        <h1> {item.title}</h1>
                        <Link to={`/shop/${item.itemOwner.id}`}>
                            <div className="store-details flex">
                                <label >Seller:</label>
                                <h4> {item.itemOwner.name}</h4>
                                <img style={{ height: "80px", width: "80px" }} src={item.itemOwner.logoUrl} alt="brandImg" />
                            </div>
                        </Link>
                        <div> {item.price}$</div>
                        <div>Size:{item.size}</div>
                        <div className="item-buttons flex">
                            <button className="item-details-btn add-to-cart" onClick={this.onAddToCart}>Add to cart</button>
                            <button className="item-details-btn buy-now" onClick={this.onBuyNow}>Buy Now</button>
                            <button  className="item-details-btn" onClick={this.onAddToWishList}>WishList</button>
                            <i className="far fa-heart"></i>
                        </div>
                        <h5>{item.sizeFit}</h5>
                    </div>
                </section>
                <h3> Item description:
                    <p>{item.description}</p>
                </h3>
                <section>
                    <div>you may also like</div>
                </section>
                <section>
                    <div>Recently viewd</div>
                </section>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        item: state.item.selectedItem,
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    setCurrentItem,
    addToWishList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);
