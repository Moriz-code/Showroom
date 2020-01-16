import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ItemActions'

import ItemsList from '../cmps/items/ItemList'

class ShopItems extends Component {

  componentDidMount() {
    this.props.loadItems()

  }

  get itemsToShow() {
    console.log('itemsToShow');
    console.log(this.props.items);
    return this.props.items;

  }

  render() {
    const { items } = this.props.items
    console.log('shopItems',this.props.items);
    return (
      <React.Fragment>
        {items ? <ItemsList items={this.props.items[0]}>
        </ItemsList>:'shit!'}
      </React.Fragment>)
  }
}

const mapStateToProps = state => {
  console.log('state.shop', state.shop);

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