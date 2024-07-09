import React from "react";
import Search from "../../images/search.svg";
import "./header.css"

function Header() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <h4>Express Yourself. Own Your Style.</h4>
            <p>
              Discover the latest trends and hottest pieces to elevate your
              look. Shop Now!
            </p>
          </div>
          <div className="col-sm-12 col-lg-4"></div>
          <div className="col-sm-12 col-lg-4">
          <input type="text" placeholder="Search Category, brand ...."/>
          <img src={Search} alt="search"/>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
      <div className=" col-12 header-display">
      <h2>FASHION FOR <br/>EVERY YOU</h2>
      <p>Unleash your style</p>
      </div>
      </div>
     
      </div>
    </div>
  );
}

export default Header;
