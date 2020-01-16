import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ItemActions'
import Filter from '../cmps/items/Filter'

import ItemsList from '../cmps/items/ItemList'

class ShopItems extends Component {

  componentDidMount() {
    this.props.loadItems()

  }

  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        <Filter></Filter>
        {items ? <ItemsList items={items}>
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