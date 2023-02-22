import React from "react";

function Navbar(){
    return(
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="images/logo.png" alt="logo" className="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-btn" href="#">
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-btn" href="#">
                  Product
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-btn" href="#">
                  Faq
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-btn" href="#">
                  contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    ) 
}

export default Navbar;