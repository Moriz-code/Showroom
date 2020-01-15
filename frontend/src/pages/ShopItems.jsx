import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../actions/ShopActions'

// import ToyList from '../cmps/items/ItemList'

class ShopItems extends Component {

  componentDidMount() {
    this.props.loadItems();
  }

  get itemsToShow() {
    return this.props.items;
  }

  render() {
    return <React.Fragment>
      <h1>Shop-Items-page</h1>

      {/* <ToyList items={this.itemsToShow}></ToyList> */}
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  loadItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItems);