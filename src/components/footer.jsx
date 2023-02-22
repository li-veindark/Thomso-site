import React from "react";

function Footer(){
    return(
        <footer className="navbar bg-body-tertiary footer">
        <div className="container-fluid">
          <img src="images/logo.png" alt="logo" />
          <div className="fontg" >
          <i className="fa-brands fa-twitter font"></i>
          <i className="fa-brands fa-facebook font"></i>
          <i className="fa-brands fa-instagram font"></i>
          <p className="small d-xl-none" >Just type what's on your mind and we'll </p>
          </div>
          <p className="large d-none d-xl-block" role="search">Copywright 2020 Bella Onojie.com</p>
          
        </div>
        </footer>
    );
}

export default Footer;