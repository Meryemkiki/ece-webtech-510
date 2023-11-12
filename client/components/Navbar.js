// Navbar.js
import React from 'react';
import Logo from '../assets/Logo.png';
import {Link} from "react-router-dom";
import'../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div classeName = "leftSide">
        <img src = {Logo}/>
      </div>

      <div classeName = "rightSide">
        <Link to ="/">Home</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/about">About us</Link>
        <Link to ="/contact">Contact</Link>
      </div>
    </div>

 )  
      
}

export default Navbar;
