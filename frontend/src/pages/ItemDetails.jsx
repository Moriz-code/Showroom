import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentItem } from '../actions/ItemActions';
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

    onAddToCart=()=>{
        OrderService.addItemtoCart(this.props.item)
    }

    onBuyNow=async()=>{
       await OrderService.addItemtoCart(this.props.item)
       this.props.history.push('/cart')
    }


    render() {
        const { item } = this.props

        return (
            item &&
            <React.Fragment>
                <section className="item-container flex space-between">
                    <div className="item-img container flex">
                        <div className="item-secondary-image flex column">
                            <img onClick={() => this.setMainImg(0)} src={item.imgs[0]} alt="image" style={{ height: "100px", width: "100px" }} />
                            <img onClick={() => this.setMainImg(1)} src={item.imgs[1]} alt="image" style={{ height: "100px", width: "100px" }} />
                            <im onClick={() => this.setMainImg(2)} src={item.imgs[2]} alt="image" style={{ height: "100px", width: "100px" }} />
                        </div>
                        <div className="item-main-image flex">
                            <img src={item.imgs[this.state.imgIndex]} alt="image" style={{ height: "450px", width: "570px" }} />
                        </div>
                    </div>
                    <div>
                        <h1> {item.title}</h1>
                        <Link to={`/shop/${item.itemOwner.id}`}>
                            <div className="store-details flex">
                                <label >Seller:</label>
                                <h4> {item.itemOwner.name}</h4>
                                <img style={{ height: "80px", width: "80px" }} src={item.itemOwner.logoUrl} alt="" />
                            </div>
                        </Link>
                        <div> {item.price}$</div>
                        <div>Size:{item.size}</div>
                        <input type="number" placeholder="1 "></input>
                        <div className="item-buttons flex">
                            <button onClick={this.onAddToCart}>Add to cart</button>
                            <button onClick={this.onBuyNow}>Buy Now</button>
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
    };
};

const mapDispatchToProps = {
    setCurrentItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);
