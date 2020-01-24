import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentItem, saveItem } from '../actions/ItemActions';
import { addToWishList, removeFromWishList } from '../actions/UserActions'
import OrderService from '../services/OrderService';
import ReviewList from '../cmps/reviews/ReviewList';
import InnerNavBar from '../cmps/InnerNavBar';

import ReviewRating from '../cmps/reviews/ReviewRating'
import Avatar from '@material-ui/core/Avatar';
import Modal from '../cmps/Modal'
import heart from '../styles/assets/imgs/icons/002-heart.png';
import heartfilled from '../styles/assets/imgs/icons/003-heart-1.png';


import ItemList from '../cmps/items/ItemList'
import UserService from '../services/UserService';

class ItemDetails extends Component {

    state = {
        imgIndex: 0,
        reviewMode: false,
        review: {
            txt: '',
            rating: ''
        },
        modalMsg: "",
        wishListStatus: heart,
        recentlyViewd: ''

    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems = () => {
        this.props.setCurrentItem(this.props.match.params.id)
        this.setRecentlyViewd()
        this.setWishListStatus()

    }

    setWishListStatus = () => {
        const { wishlist } = this.props.loggedInUser

        const { item } = this.props
        console.log(wishlist,item,'123123123');
        
       const found = wishlist.find(currItem => currItem._id === item._id)
        console.log(found,'asdasdgea')
    }




    componentDidUpdate(prevProps) {
        // (this.props.match.params.id===state.item.selectedItem._id)?
        if (prevProps.match.params.id !== this.props.match.params.id) this.loadItems()

    }

    componentWillUnmount = () => {
        UserService.updateRecentlyViewd('recently', this.props.item)
        this.props.setCurrentItem(null)
    }

    onBack = () => {
        this.props.history.push('/')
    }

    setMainImg = (imgIndex) => {
        this.setState({ imgIndex })
    }
    changeImg = async (diff) => {
        let currIdx = await this.state.imgIndex

        const newIdx = ((currIdx === 2) && (diff > 0)) ? 0 :
            ((currIdx === 0) && (diff < 0)) ? 2 : (currIdx + diff)
        this.setState({ imgIndex: newIdx })
    }

    onAddToCart = async () => {
        OrderService.addItemtoCart(this.props.item)
        await this.setState({ modalMode: true, modalMsg: "Added To Cart" })
        this.setState({ modalMode: false, modalMsg: "" })
    }

    onBuyNow = async () => {
        await OrderService.addItemtoCart(this.props.item)
        this.props.history.push('/cart')
    }


    onAddToWishList = async () => {

        if (this.state.wishListStatus === heart) {
            await this.props.addToWishList(this.props.item, this.props.loggedInUser)
            await this.setState({ modalMsg: "Added to Wishlist", wishListStatus: heartfilled })
            await this.setState({ modalMsg: "" })


        }
        else {
            await this.props.removeFromWishList(this.props.item._id, this.props.loggedInUser)
            await this.setState({ modalMsg: "Removed from Wishlist", wishListStatus: heart })
            await this.setState({ modalMsg: "" })
        }


    }

    onAddReview = async () => {
        await this.setState({ reviewMode: true })

    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        this.setState({ reviewMode: false, review: { txt: '', rate: '' } })
        const itemToUpdate = { ...this.props.item }
        const newReview = { byUser: { id: this.props.loggedInUser._id, name: this.props.loggedInUser.fullName }, txt: this.state.review.txt, rate: this.state.review.rating }
        const reviews = await [...itemToUpdate.reviews, newReview]
        const updatedItem = { ...itemToUpdate, reviews }
        await this.props.saveItem(updatedItem)
        this.props.setCurrentItem(this.props.match.params.id)
        await this.setState({ modalMsg: "Thank you for your review" })
        this.setState({ modalMsg: "" })
    }





    handleInput = (ev) => {
        const value = ev.target.value;
        const field = ev.target.name

        this.setState(prevState => ({ review: { ...prevState.review, [field]: value } }))

    }

    calculateAvgRating = () => {
        const { reviews } = this.props.item
        const ratingSum = reviews.reduce((acc, review) => {

            return acc += +review.rate
        }, 0)
        const avgRating = Math.floor(ratingSum / reviews.length / 5 * 100)
        return avgRating

    }


    setRecentlyViewd = async () => {
        const recentlyViewd = await UserService.getRecntlyViewd()
        this.setState({ recentlyViewd })


    }



    render() {
        const { item } = this.props
        const recentlyViewd = this.state.recentlyViewd
        return (
            item &&
            <React.Fragment>
                <InnerNavBar></InnerNavBar>
                <Modal msg={this.state.modalMsg}></Modal>
                <section className="container flex item-details-main">

                    <div className="item-img flex">
                        <div className="item-secondary-image flex column">
                            <img className="secondary-img" onClick={() => this.setMainImg(0)} src={item.imgs[0]} alt="itemImg1" />
                            <img className="secondary-img" onClick={() => this.setMainImg(1)} src={item.imgs[1]} alt="itemImg2" />
                            <img className="secondary-img" onClick={() => this.setMainImg(2)} src={item.imgs[2]} alt="itemImg3" />
                        </div>
                        <div className="item-main-image flex">
                            <a onClick={() => this.changeImg(-1)} href="#" className="previous-img">&laquo;</a>
                            <a onClick={() => this.changeImg(1)} href="#" className="next-img">&raquo;</a>
                            <img className="main-img" src={item.imgs[this.state.imgIndex]} alt="mainImg" />
                            <img className="wishlist-icon" onClick={this.onAddToWishList} src={`${this.state.wishListStatus}`}></img>
                        </div>
                    </div>
                    <div className="item-side-details flex column justify-space-between">
                        <h1 className="item-details-title"> {item.title}</h1>
                        <Link to={`/shop/${item.itemOwner.id}`}>
                            <div className="store-details flex">
                                <Avatar alt="" src={item.itemOwner.logoUrl} style={{ backgroundColor: "lightgray" }} />
                                <h4 className="brand-name"> {item.itemOwner.name}</h4>
                                {/* <img style={{ height: "80px", width: "80px" }} src={item.itemOwner.logoUrl} alt="brandImg" /> */}
                            </div>
                        </Link>
                        <div className="item-price">${item.price}</div>
                        <select className="size-select" placeholder="Select Size">
                            {item.size === "s" ? <option value="s">S</option> : <option disabled value="S">S - Out of stock</option>}
                            {item.size === "m" ? <option value="m">M</option> : <option disabled value="M">M - Out of stock</option>}
                            {item.size === "l" ? <option value="l">L</option> : <option disabled value="L">L - Out of stock</option>}
                            {item.size === "xl" ? <option value="xl">XL</option> : <option disabled value="XL">XL - Out of stock</option>}
                        </select>
                        {/* <h4>Average Rating {Math.round((this.calculateAvgRating() / 100 * 5) * 100) / 100 || ""}</h4> */}

                        <ReviewRating amount={item.reviews.length} rate={this.calculateAvgRating()}></ReviewRating>
                        <div className="item-buttons flex">
                            <button className="item-details-btn add-to-cart" onClick={this.onAddToCart}>Add to cart</button>
                            <button className="item-details-btn buy-now" onClick={this.onBuyNow}>Buy Now</button>
                            <i className="far fa-heart"></i>
                        </div>
                        <div>
                            <h3 className="item-desctription">
                                <p>{item.description}</p>
                            </h3>
                            <h5>{item.sizeFit}</h5>
                        </div>
                    </div>
                </section>

                <div className="container reviews">
                    {item.reviews.length > 0 &&
                        <div className="container">
                            <ReviewList item={this.props.item}></ReviewList>
                        </div>
                    }
                    <button className="item-details-btn add-review" onClick={this.onAddReview}>Add Review</button>
                </div>
                {this.state.reviewMode &&
                    <form className="review-section container flex" onSubmit={this.handleSubmit}>
                        <div className="review-input">
                            <textarea rows="4" cols="50" className="review-textarea" onChange={this.handleInput} type="txt" value={this.state.review.txt} name="txt" placeholder="Tell us what's on your mind?"></textarea>
                        </div>
                        <fieldset className="rating" onChange={this.handleInput} >
                            {/* <legend>Please rate:</legend> */}
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </fieldset>
                        <button>Submit</button>
                    </form>

                }
                {/* <section className="container">
                    <div>You may also like</div>
                </section> */}
                <section className="container recently-viewed">
                    <div>Recently viewd</div>
                    {(recentlyViewd.length > 0) ? <ItemList items={recentlyViewd}></ItemList> : ''

                    }
                </section>
            </React.Fragment >
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
    addToWishList,
    removeFromWishList,
    saveItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);
