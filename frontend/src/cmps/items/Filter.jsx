
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Filter extends Component {


  render() {
    return <React.Fragment>

      <input type="range" name="points" min="0" max="10" />
      {/* colors */}
      <select>
      <option value="" disabled selected>Color</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
      </select>
      {/* gender */}
      <select>
      <option value="" disabled selected>Gender</option>
        <option value="women">Women</option>
        <option value="man">Men</option>
        <option value="unisex">Unisex</option>
      </select>
      {/* sizes */}
      <select>
      <option value="" disabled selected>Size</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
      </select>
      {/* brand */}
      <select>
      <option value="" disabled selected>Brand</option>
        <option value="zara">Zara</option>
        <option value="asos">Asos</option>
        <option value="urban">Urban</option>
      </select>
      
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
)(Filter);
