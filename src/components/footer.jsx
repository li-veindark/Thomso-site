import React from "react";

function Footer(){
    return(
        <footer className="navbar bg-body-tertiary footer">
        <div className="container-fluid">
          <img src="images/logo.png" alt="logo" />
          <div >
          <i className="fa-brands fa-twitter font"></i>
          <i className="fa-brands fa-facebook font"></i>
          <i className="fa-brands fa-instagram font"></i>
          </div>
          <p className="d-flex" role="search">Copywright 2020 Bella Onojie.com</p>
        </div>
        </footer>
    );
}

export default Footer;