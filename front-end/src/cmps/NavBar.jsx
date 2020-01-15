import React from 'react';
import { NavLink } from 'react-router-dom'


export default function NavBar() {
    return <nav>
        <ul>
            <li><NavLink activeClassName="active" to='/item' exact>Shop</NavLink></li> 
            <li><NavLink activeClassName="active" to='/' exact>About Us</NavLink></li>                             
        </ul>
    </nav>
}