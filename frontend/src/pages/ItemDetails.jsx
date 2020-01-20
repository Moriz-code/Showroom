import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentItem, saveItem } from '../actions/ItemActions';
import { addToWishList } from '../actions/UserActions'
import OrderService from '../services/OrderService';
import ReviewList from '../cmps/reviews/ReviewList'
import ReviewRating from '../cmps/reviews/ReviewRating'
import Avatar from '@material-ui/core/Avatar';
class ItemDetails extends Component {

    state = {
        imgIndex: 0,
        reviewMode: false,
        review: {
            txt: '',
            rating: ''
        }
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
    changeImg = (diff) => {
        console.log(diff);

        const currIdx = this.state.imgIndex
        console.log(currIdx);
        ((currIdx === 2) && (diff > 0)) ? this.setState({ imgIndex: 0 }) :
            ((currIdx === 0) && (diff < 0)) ? this.setState({ imgIndex: 2 }) : this.setState({ imgIndex: currIdx + diff })

    }

    onAddToCart = () => {

        OrderService.addItemtoCart(this.props.item)
    }

    onBuyNow = async () => {
        await OrderService.addItemtoCart(this.props.item)
        this.props.history.push('/cart')
    }


    onAddToWishList = async () => {
        const wishList = await this.props.addToWishList(this.props.item, this.props.loggedInUser)
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






    render() {
        const { item } = this.props
        item && console.log(item.reviews, 'reviews')
        return (
            item &&
            <React.Fragment>
                <section className="item-container flex justify-space-around">
                    <div className="item-img flex">
                        <div className="item-secondary-image flex column justify-space-between">
                            <img className="secondary-img" onClick={() => this.setMainImg(0)} src={item.imgs[0]} alt="itemImg1" />
                            <img className="secondary-img" onClick={() => this.setMainImg(1)} src={item.imgs[1]} alt="itemImg2" />
                            <img className="secondary-img" onClick={() => this.setMainImg(2)} src={item.imgs[2]} alt="itemImg3" />
                        </div>
                        <div className="item-main-image flex">
                            <a onClick={() => this.changeImg(-1)} href="#" className="previous-img">&laquo;</a>
                            <a onClick={() => this.changeImg(1)} href="#" className="next-img">&raquo;</a>
                            <img className="main-img" src={item.imgs[this.state.imgIndex]} alt="mainImg" />
                        </div>
                    </div>
                    <div className="item-side-details flex column justify-space-between">
                        <h1 className="item-details-title"> {item.title}</h1>
                        <Link to={`/shop/${item.itemOwner.id}`}>
                            <div className="store-details flex column">
                                <label >Seller:</label>
                                <h4> {item.itemOwner.name}</h4>
                                <Avatar alt="" src={item.itemOwner.logoUrl} style={{ backgroundColor: "lightgray" }} />
                                {/* <img style={{ height: "80px", width: "80px" }} src={item.itemOwner.logoUrl} alt="brandImg" /> */}
                            </div>
                        </Link>

                        <div>${item.price}</div>
                        <div>Size:{item.size}</div>
                        <h2>Average Rating {Math.round((this.calculateAvgRating()/100*5)*100)/100||""}</h2>

                        <ReviewRating amount={item.reviews.length} rate={this.calculateAvgRating()}></ReviewRating>
                        <div className="item-buttons flex">
                            <button className="item-details-btn add-to-cart" onClick={this.onAddToCart}>Add to cart</button>
                            <button className="item-details-btn buy-now" onClick={this.onBuyNow}>Buy Now</button>
                            <button className="item-details-btn add-to-wishList" onClick={this.onAddToWishList}>WishList</button>
                            <button className="item-details-btn add-review" onClick={this.onAddReview}>Add Review</button>
                            <i className="far fa-heart"></i>
                        </div>
                        <div>
                            <h3> Item description:
                    <p>{item.description}</p>
                            </h3>
                            {this.state.reviewMode &&
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <input onChange={this.handleInput} type="txt" value={this.state.review.txt} name="txt" placeholder="What do you think about this product?"></input>
                                    </div>

                                    <fieldset className="rating" onChange={this.handleInput}>
                                        <legend>Please rate:</legend>
                                        <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                                        <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                                        <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                                        <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                                        <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                                    </fieldset>
                                    <button>Submit</button>
                                </form>
                            }
                        </div>
                        <h5>{item.sizeFit}</h5>
                    </div>
                </section>
                {item.reviews.length > 0 &&
                    <div>
                        < section >
                            <div>Reviews</div>
                        </section>
                        <ReviewList item={this.props.item}></ReviewList>
                    </div>
                }
                <section>
                    <div>you may also like</div>
                </section>
                <section>
                    <div>Recently viewd</div>
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
    saveItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);
