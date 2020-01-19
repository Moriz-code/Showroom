import React, { Component } from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom'


class Header extends Component {
  render() {
    return <React.Fragment>
      <div className="main-header flex">
     <Link to={`/`}><div className="logo">LOGO</div></Link> 
        <NavBar></NavBar>
      </div>
    </React.Fragment>
  }
}


export default (Header)


