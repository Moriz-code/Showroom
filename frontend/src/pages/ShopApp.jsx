import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../cmps/Header'
import { loadItems } from '../actions/ItemActions'
import ItemsList from '../cmps/items/ItemList'


class ShopApp extends Component {

    componentDidMount() {
        this.props.loadItems()
    }

    render() {
        let { items } = this.props;
        items = items.splice(0, 3)
        return <React.Fragment>
            <Header></Header>
            {/* <div className="hero"> */}
            {/* <p className="hero-title">Buy and sell local fashion goods</p> */}
            {/* <input className="hero-search" type="text" id="search-bar" placeholder="Looking for something specific?" /> */}
            {/* <button className="searchBtn">Search</button> */}
            {/* <Link to="/item"><button>Shop Now</button></Link> */}
            {/* </div> */}
               
            <div className=" home-categories">
                <div className="category-b">
                    <span className="home-page-text">BEST SELLER</span>
                </div>
                <div className="category-c">
                    <span className="home-page-text">WOMEN</span>
                </div>
                <div className="category-d">
                    <span className="home-page-text">MEN</span>
                </div>
                <div className="category-e">
                    <span className="home-page-text">HATS</span>
                </div>
            </div>
            <span className="home-page-text">HOT PRODUCTS</span>
                {items.length !== 0 ? <ItemsList items={items}>
                </ItemsList> : 'NO ITEMS!'}


        </React.Fragment>
    }
}



const mapStateToProps = state => {
    return {
        items: state.item.items,
    };
};

const mapDispatchToProps = {
    loadItems
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopApp);
