import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentItem } from '../actions/ItemActions';
// import Avatar from '@material-ui/core/Avatar';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
class ItemDetails extends Component {

    componentDidMount() {


        this.props.setCurrentItem(this.props.match.params.id)

    }

    componentWillUnmount = () => {
        // this.props.setCurrentItem(null)

    }

    onBack = () => {
        // this.props.history.push('/')
    }

    render() {
        const { item } = this.props
        return (
            item &&
            <React.Fragment>
                <section className="item-container flex space-between">
                    <div>
                        <img src={item.imgs[0]} alt="image" style={{ height: "300px", width: "400px" }} />
                    </div>
                    <div>
                        <h1> {item.title}</h1>
                        <div className="store-details flex">
                            {/* <Avatar alt="Remy Sharp" src="https://scontent.ftlv1-2.fna.fbcdn.net/v/t1.0-9/10559713_10153073749172830_4028919375654008823_n.jpg?_nc_cat=110&_nc_ohc=TqMHX-jzQCcAX_JVJD3&_nc_ht=scontent.ftlv1-2.fna&oh=366d9a3e70b80391ab1885fe174797f4&oe=5E8DD8EF" /> */}
                            <h4> Seller:Roy Amar</h4>
                        </div>
                        <div> {item.price}$</div>
                        <div>Size:{item.size}</div>
                        <input type="number" placeholder="1 "></input>
                        <div className="item-buttons flex">
                            <button>Add to cart</button>
                            <button>Buy Now</button>
                        </div>
                        <h5>{item.sizeFit}</h5>
                        {/* <FavoriteBorderIcon> </FavoriteBorderIcon>
                        <FavoriteIcon></FavoriteIcon> */}
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
    console.log(state.shop);

    return {
        item: state.shop.selectedItem,
    };
};

const mapDispatchToProps = {
    setCurrentItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);
