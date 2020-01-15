import React, { Component } from 'react';
import { connect } from 'react-redux'

class ShopItems extends Component {

  render() {
    return <React.Fragment>
    <h1>Shop-Items-page</h1>
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
   //state
  };
};

const mapDispatchToProps = {
 //functions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItems);