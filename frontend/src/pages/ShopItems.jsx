import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ItemActions'

import ItemsList from '../cmps/items/ItemList'

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

      <ItemsList items={this.itemsToShow}></ItemsList>
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