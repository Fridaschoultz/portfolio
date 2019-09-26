import React from "react";
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav_bar">
    <div className="navleft">
      <a className="navleft" href="#">FS</a>
    </div>
    <div className="navright">
      <a className="navlinks" href="#sec1">Home</a>
      <a className="navlinks" href="#sec2">Projects </a >
      <a className="navlinks" href="#sec3">About me</a> {/* om dig, och färdigheter  */}
    </div>
  </nav>
        );
}

export default Navbar;