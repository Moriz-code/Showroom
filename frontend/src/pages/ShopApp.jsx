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



    setUser=(ev)=>{

        this.props.SetloggedInUser(ev.target.value)

    }


    render() {
        let { items } = this.props;
        var itemsHome = items.splice(0, 4)
        return <React.Fragment>
            <Header ></Header>

            <div className=" home-categories">
                <div className="category-b">
                    <Link to={`/item/clearance`}> <span className="home-page-text">CLEARANCE</span> </Link>
                </div>
                <div className="category-c">
                    <Link to={`/item/women`}> <span className="home-page-text">WOMEN</span></Link>
                </div>

                <div className="category-d">
                    <Link to={`/item/men`}>  <span className="home-page-text">MEN</span></Link>
                </div>
                <div className="category-e">
                    <Link to={`/item/petit`}> <span className="home-page-text">PETIT</span></Link>
                </div>
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
