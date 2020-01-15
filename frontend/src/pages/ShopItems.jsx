import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ShopActions'

<<<<<<< HEAD
import ItemsList from '../cmps/items/ItemList'
=======
// import ToyList from '../cmps/items/ItemList'
>>>>>>> 4f39933c4996784403a604ea7867d79a63fc6c66

class ShopItems extends Component {

  componentDidMount() {
    console.log('componentDidMount');
    this.props.loadItems();
  }

  get itemsToShow() {
    console.log('itemsToShow');

    return this.props.items;
  }

  render() {
    return <React.Fragment>
      <h1>Shop-Items-page</h1>

<<<<<<< HEAD
      <ItemsList items={this.itemsToShow}></ItemsList>
=======
      {/* <ToyList items={this.itemsToShow}></ToyList> */}
>>>>>>> 4f39933c4996784403a604ea7867d79a63fc6c66
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  console.log('nbdsvcnsvc n');
  
  return {
    items: state.shop.items
  };
};

const mapDispatchToProps = {
  loadItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItems);