import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ItemActions'
import Filter from '../cmps/items/Filter'

import ItemsList from '../cmps/items/ItemList'

class ShopItems extends Component {
  state = {
    filterBy: {
      size: [],
      gender: [],
      shop: []
    }
  }

  componentDidMount() {
    this.props.loadItems()
  }


  selectFilter = (ev) => {

    let { name, value } = ev.target;
    var list = [...this.state.filterBy[name]]
    var idx = list.indexOf(value)

    if (idx >= 0) {
      list.splice(idx, 1)
      value = list
    } else {
      value = list.concat(value)
    }


    this.setState(prevState => ({
      ...prevState,
      filterBy: {
        ...prevState.filterBy, [name]: value
      }
    }))

    console.log(this.state);

    this.props.loadItems(this.state.filterBy);
  }

  // get filteredItems() {
  //   const { items } = this.props;
  //   const { filter } = this.props;
  //   const { sort } = this.props;
  //   let filteredItems = items;
  //   if (sort.length !== 0) {
  //     filteredItems = this.sortedItems()
  //   } if (filter.length === 0) return filteredItems
  //   else {
  //     filter.forEach((filter) => {
  //       for (const key in filter) {
  //         filteredItems = filteredItems.filter((item) => {
  //           if ((key === 'shop') && (item.itemOwner.name === filter[key])) return true
  //           else if ((key === 'price') && (item[key] <= +filter[key])) {
  //             return true
  //           }
  //           else if (item[key] === filter[key]) return true
  //           else return false
  //         })
  //       }
  //     })

  //   }
  //   return filteredItems;
  // }


  // sortedItems = () => {
  //   const { sort } = this.props;
  //   let sortedItems = this.props.items;
  //   sort.forEach((sort) => {
  //     for (const key in sort) {
  //       sortedItems.sort((itemA, itemB) => {
  //         let fieldA = itemA['price']
  //         let fieldB = itemB['price']
  //         if (sort[key] === 'high-low') return fieldA > fieldB ? 1 : -1
  //         else return fieldA < fieldB ? 1 : -1
  //       })
  //     }
  //   })
  //   return sortedItems
  // }





  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        <Filter selectFilter={this.selectFilter}></Filter>
        {items.length !== 0 ? <ItemsList items={items}>
        </ItemsList> : 'NO ITEMS!'}
        {/* {this.filteredItems.length !== 0 ? <ItemsList items={this.filteredItems}>
        </ItemsList> : 'NO ITEMS!'} */}
      </React.Fragment>)
  }
}

const mapStateToProps = state => {
  return {
    items: state.item.items,
    filter: state.item.filter,
    sort: state.item.sorts
  };
};

const mapDispatchToProps = {
  loadItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItems);


