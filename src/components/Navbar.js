import React from "react";
// import { ScrollTo, ScrollArea } from "react-scroll-to";
import '../style/Navbar.css';

const Navbar = () => {
  return (
            <div className="navbar_fixed_position">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">FS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#sec1">Home</a>
                    <a className="nav-item nav-link" href="#sec2">Projects </a >
                    <a className="nav-item nav-link" href="#sec3">About me</a> 
                  </div>
                </div>
              </nav>
            </div>  
        );
}

export default Navbar;