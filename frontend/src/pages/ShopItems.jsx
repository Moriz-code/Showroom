import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ItemActions'
import Filter from '../cmps/items/Filter'

import ItemsList from '../cmps/items/ItemList'
import InnerNavBar from '../cmps/InnerNavBar';

class ShopItems extends Component {
  state = {
    filterBy: {
      size: [],
      gender: [],
      shop: [],
      price: ''
    }
  }

  componentDidMount() {

    var params = this.props.match.params.searchTerm

    if (params) {
      if (params === 'women' || params === 'men') this.props.loadItems({ 'gender': [params] })
      if (params === 'petit') this.props.loadItems({ 'size': ['xs', 's'] })
      if (params === 'clearance') this.props.loadItems({ 'price': 40 })
      else this.props.loadItems({ 'txt': params })
    }
    else this.props.loadItems()
  }


  selectFilter = (ev) => {
    let { name, value } = ev.target;
    if (name !== 'price') {
      var list = [...this.state.filterBy[name]]
      var idx = list.indexOf(value)

      if (idx >= 0) {
        list.splice(idx, 1)
        value = list
      } else {
        value = list.concat(value)
      }
    }
    this.setState(prevState => ({
      ...prevState,
      filterBy: {
        ...prevState.filterBy, [name]: value
      }
    }), () => this.props.loadItems(this.state.filterBy))


  }

  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        <InnerNavBar></InnerNavBar>
        <Filter selectFilter={this.selectFilter}></Filter>
        {items.length !== 0 ? <ItemsList items={items}>
        </ItemsList> : 'NO ITEMS!'}
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


