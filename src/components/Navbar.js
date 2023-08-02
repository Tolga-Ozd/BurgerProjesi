import React from 'react';
import Burgerlogo from "../assets/burgerlogo.png";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div  iv className='main'>
            <img src={Burgerlogo} alt="" />
            <div className='mainLink'>
              <Link to="/">Anasayfa</Link>
              <Link to="/menu">Menü</Link>
              <Link to="/about">Hakkımızda</Link>
              <Link to="/contact">İletişim</Link>
            </div>
        </div>
    </div>
  );
};

export default Navbar
