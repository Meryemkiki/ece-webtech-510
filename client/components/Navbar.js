// Navbar.js
import React , {useState} from 'react';
import Logo from '../assets/Logo.png';
import {Link} from "react-router-dom";
import'../styles/Navbar.css';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false) ;
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
  return (
    <div className='navbar'>
      <div classeName = "leftSide" id = {openLinks ? "open" : "close"}>
        <img src = {Logo}/>
        <div className='hiddenLinks'>
        <Link to ="/">Home</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/about">About us</Link>
        <Link to ="/contact">Contact</Link>

        </div>
      </div>

      <div classeName = "rightSide">
        <Link to ="/">Home</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/about">About us</Link>
        <Link to ="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>

 )  
      
}

export default Navbar;
