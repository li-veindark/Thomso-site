import React from "react";

function Navbar(){
    return(
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <img src="images/logo.png" alt="logo" className="logo" />
          <form class="d-flex" role="search">
            <button className="nav-btn" href="#">Home</button>
            <button className="nav-btn" href="#">Product</button>
            <button className="nav-btn" href="#">Faq</button>
            <button className="nav-btn" href="#">contact</button>
          </form>
        </div>
      </nav>
    ) 
}

export default Navbar;