import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilters, removeFilter, setSorts } from '../../actions/ItemActions'


import InputRange from 'react-input-range';



class Filter extends Component {


  state = {
    isToggle: ''
  }

  // onSelectFilter = (ev) => {
  //   if (ev.target.checked) {
  //     this.props.setFilters({ [ev.target.name]: ev.target.value })
  //   } else this.props.removeFilter({ [ev.target.name]: ev.target.value })
  // }

  onSelectFilter = (ev) => {
    this.props.selectFilter(ev)
  }




  onToggleActive = () => {
    this.setState((prevState) => {
      if (prevState.isToggle === '') return this.state.isToggle = 'is-active'
      return this.state.isToggle = ''
    })
  }

  onSelectPriceRange = (ev) => {
    console.log(ev.target.value);
    this.props.setFilters({ [ev.target.name]: ev.target.value })
  }


  onSelectSort = (ev) => {
    this.props.setSorts({ [ev.target.name]: ev.target.value })
  }



  render() {
    return <React.Fragment>
      <div className="flex">
        {/* sizes */}
        <div className={`checkbox-dropdown ${this.state.isToggle}`} onClick={this.onToggleActive}>
          Size
  <ul className="checkbox-dropdown-list" >
            <li>
              <label>
                <input type="checkbox" value="s" name="size" onChange={this.onSelectFilter} />S</label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="m" name="size" onChange={this.onSelectFilter} />M</label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="l" name="size" onChange={this.onSelectFilter} />L</label>
            </li>
          </ul>
        </div>


        {/* Gender */}
        <div className={`checkbox-dropdown ${this.state.isToggle}`} onClick={this.onToggleActive}>
          Gender
  <ul className="checkbox-dropdown-list" >
            <li>
              <label>
                <input type="checkbox" value="men" name="gender" onChange={this.onSelectFilter} />Men</label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="women" name="gender" onChange={this.onSelectFilter} />Women</label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="unisex" name="gender" onChange={this.onSelectFilter} />Unisex</label>
            </li>
          </ul>
        </div>

        {/* Shops */}
        <div className={`checkbox-dropdown ${this.state.isToggle}`} onClick={this.onToggleActive}>
          Shops
  <ul className="checkbox-dropdown-list" >
            <li>
              <label>
                <input type="checkbox" value="MyBrand" name="shop" onChange={this.onSelectFilter} />MyBrand</label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="coral" name="shop" onChange={this.onSelectFilter} />Coral</label>
            </li>
          </ul>
        </div>


        {/* SortBy */}
        <div className={`checkbox-dropdown ${this.state.isToggle}`} onClick={this.onToggleActive}>
          Sort By
  <ul className="checkbox-dropdown-list" >
            <li>
              <label>
                <input type="radio" value="high-low" name="sortBy" onChange={this.onSelectSort} />Price (low to high)</label>
            </li>
            <li>
              <label>
                <input type="radio" value="low-high" name="sortBy" onChange={this.onSelectSort} />Price (high to low)</label>
            </li>
          </ul>
        </div>



        {/* Price */}
        <div>
          <input type="range" name="price" min="0" max="300" onChange={this.onSelectPriceRange} step="1" ></input>
        </div>





      </div>


    </React.Fragment>
  }

}
const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = {
  // setFilters,
  removeFilter,
  setSorts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
