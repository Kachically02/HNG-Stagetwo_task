import React, { useState } from "react";
import "./nav.css";
import Logo from "../../images/SAGE_SALES.png";
import { RiShoppingCartLine, RiCloseLargeFill } from "react-icons/ri";
import Hamburger from "../../images/hambuger.svg";


function Navigation() {
  const [open, setOpen]=useState(false);
  return (
    <div className="main-container">
      {!open? (
        <img src={Hamburger} alt="" className="img-hamburger" />
      ): (
        <RiCloseLargeFill className="img-hamburger"/>
      )}
        <img src={Logo} alt="logo" />
        <div className="nav-act">
          <button>SHOP</button>
          <a href="#">CONTACT US</a>
          <div className="cart-items">
            <RiShoppingCartLine />
            <p className="cart-txt">CART</p>
          </div>
        </div>
        {open && (
          <div className="nav-act">
          <button>SHOP</button>
          <a href="#">CONTACT US</a>
          <div className="cart-items">
            <RiShoppingCartLine />
            <p className="cart-txt">CART</p>
          </div> 
          </div>
        )}
      </div>
      
    
  );
}

export default Navigation;
