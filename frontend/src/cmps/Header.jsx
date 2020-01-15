import React, { Component } from 'react';
import NavBar from './NavBar';


class Header extends Component {
  render() {
    return <React.Fragment>
      <div className="main-header flex">
        <div className="logo">LOGO</div>
        <NavBar></NavBar>
      </div>
    </React.Fragment>
  }
}


export default (Header)


