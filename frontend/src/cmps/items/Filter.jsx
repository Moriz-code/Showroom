import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setFilters, removeFilter, setSorts } from '../../actions/ItemActions'


// import InputRange from 'react-input-range';



class Filter extends Component {


  state = {
    isToggle: ''
  }

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



        {/* Price */}
        <div className={`checkbox-dropdown ${this.state.isToggle}`} onClick={this.onToggleActive}>
          price
  <ul className="checkbox-dropdown-list" >
            <li>
              <label>
                <input type="radio" value="0 100" name="price" onChange={this.onSelectFilter} />0-100</label>
            </li>
            <li>
              <label>
                <input type="radio" value="101 300" name="price" onChange={this.onSelectFilter} />101-300</label>
            </li>
            <li>
              <label>
                <input type="radio" value="301 600" name="price" onChange={this.onSelectFilter} /> 301-600</label>
            </li>
          </ul>
        </div>




      </div>


    </React.Fragment>
  }

}
const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
