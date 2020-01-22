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
      shop: [],
      price: ''
    }
  }

  componentDidMount() {

    var params = this.props.match.params.searchTerm
    console.log('params-mazal', this.props.match);
    // params = params.substring(1, params.length)
    if (params) this.props.loadItems({ 'txt': params })
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


