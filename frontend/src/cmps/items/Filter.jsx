
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component {

  state = {
    isToggle: '',
    isClicked: ''
  }

  onSelectFilter = async (ev) => {

    // this.setState((prevState) => {
    //   if (prevState.isClicked === '') this.state.isClicked = ev.target.value
    //   else this.state.isClicked = ''
    // })
    // let key = ev.target.name
    // let value = this.state.isClicked
    // console.log({ [key]: value });


    // this.props.setFilters({ [key]: value });
  }

  onToggleActive = () => {
    this.setState((prevState) => {
      if (prevState.isToggle === '') return this.state.isToggle = 'is-active'
      return this.state.isToggle = ''
    })

  }


  render() {
    return <React.Fragment>
      <div className={`checkbox-dropdown ${this.state.isToggle}`} onClick={this.onToggleActive}>
        Color
  <ul className="checkbox-dropdown-list" >
          <li>
            <label>
              <input type="checkbox" value="black" name="color" onChange={this.onSelectFilter} />Black</label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="white" name="color" />White</label>
          </li>
        </ul>
      </div>


    </React.Fragment>
  }

}
const mapStateToProps = state => {
  return {
    // filter: state.filter
  };
};

const mapDispatchToProps = {
  // setFilters
  //functions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
