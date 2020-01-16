import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentItem } from '../actions/ItemActions';
// import Avatar from '@material-ui/core/Avatar';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
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

    toggleImg = (imgIndex) => {
        this.setState({ imgIndex })
    }

    render() {
        const { item } = this.props

        return (
            item &&
            <React.Fragment>
                <section className="item-container flex space-between">
                    <div className="item-img container flex">
                        <div className="item-secondary-image flex column">
                            <img onClick={() => this.toggleImg(0)} src={item.imgs[0]} alt="image" style={{ height: "100px", width: "100px" }} />
                            <img onClick={() => this.toggleImg(1)} src={item.imgs[1]} alt="image" style={{ height: "100px", width: "100px" }} />
                            <im onClick={() => this.toggleImg(2)} src={item.imgs[2]} alt="image" style={{ height: "100px", width: "100px" }} />
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
                            <button>Add to cart</button>
                            <button>Buy Now</button>
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
