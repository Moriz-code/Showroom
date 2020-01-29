import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../cmps/Header'
import { loadItems } from '../actions/ItemActions'
import ItemsList from '../cmps/items/ItemList'
import Footer from '../cmps/Footer';

import { SetloggedInUser } from '../actions/UserActions'

class ShopApp extends Component {



    componentDidMount() {

      
        this.props.loadItems()
    }

    componentDidUpdate() {
   
        this.props.loadItems()
    }



    setUser = (ev) => {

        this.props.SetloggedInUser(ev.target.value)

    }


    render() {
        let { items } = this.props;
        var itemsHome = items.splice(0, 4)
        return <React.Fragment>
            <Header ></Header>

            <div className=" home-categories">

                <Link to={`/item/clearance`} className="category-b">
                    <span className="home-page-text">CLEARANCE</span> </Link>
                    
                <Link to={`/item/women`} className="category-c">
                    <span className="home-page-text">WOMEN</span></Link>

                <Link to={`/item/men`} className="category-d">
                    <span className="home-page-text">MEN</span></Link>

                <Link to={`/item/petit`} className="category-e">
                    <span className="home-page-text">PETIT</span></Link>
            </div>
            <span className="home-page-text">HOT PRODUCTS</span>

            {items.length !== 0 ? <ItemsList items={itemsHome}>
            </ItemsList> : 'NO ITEMS!'}
            <select onChange={this.setUser} name="User" >
                <option value="Shop Owner">Shop Owner</option>
                <option value="Customer">Customer</option>
            </select>
            <Footer></Footer>
        </React.Fragment>
    }
}



const mapStateToProps = state => {
    return {
        items: state.item.items,
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    loadItems,
    SetloggedInUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopApp);
