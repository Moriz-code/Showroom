import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ItemActions'

import ItemsList from '../cmps/items/ItemList'

class ShopItems extends Component {

  componentDidMount() {
    this.props.loadItems()

  }

  // get itemsToShow() {
  //   console.log('itemsToShow');
  //   console.log(this.props.items);
  //   return this.props.items;
  // }

  render() {
    // const { items } = this.props.items
    return (
      <React.Fragment>
        {this.props.items ? <ItemsList items={this.props.items}>
        </ItemsList>:'shit!'}
      </React.Fragment>)
  }
}

const mapStateToProps = state => {
  return {
    items: state.item.items
  };
};

const mapDispatchToProps = {
  loadItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItems);