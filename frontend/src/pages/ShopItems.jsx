import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ItemActions'
import Filter from '../cmps/items/Filter'

import ItemsList from '../cmps/items/ItemList'

class ShopItems extends Component {

  componentDidMount() {
    this.props.loadItems()

  }

  get filteredItems() {
    let filterKey, filterValue;
    const { items } = this.props;
    const { filter } = this.props;
    let filteredItems = items;
    if (filter.length === 0) return this.props.items
    else {
      filter.forEach((filter) => {
        for (const key in filter) {
          filterKey = key;
          filterValue = filter[key]
          filteredItems = filteredItems.filter((item) => {
            console.log('item', item);
            console.log('filterKey', filterKey);
            // console.log('item[filterKey]', item[filterKey]);
            console.log('filterValue', filterValue);
            // debugger;
            if ((filterKey === 'shop') && (item.itemOwner.name === filterValue)) return true
            else if ((filterKey === 'price') && (item[filterKey] <= filterValue)) return true
            else if (item[filterKey] === filterValue) return true
            else return false
          })
        }
      })
      return filteredItems;
    }
  }





  render() {
    return (
      <React.Fragment>
        <Filter></Filter>
        {this.filteredItems.length !== 0 ? <ItemsList items={this.filteredItems}>
        </ItemsList> : 'NO ITEMS!'}
      </React.Fragment>)
  }
}

const mapStateToProps = state => {
  return {
    items: state.item.items,
    filter: state.item.filter
  };
};

const mapDispatchToProps = {
  loadItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItems);


