import React from 'react';
import '../style/Navbar.css';
// import Anime from 'react-anime';


class Navbar extends React.Component{
    render() {
        return (
            <div className="nav_bar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Robars portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#sec1">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#sec2">Projects</a>
                    <a className="nav-item nav-link" href="#sec3">About me</a>
                    <a className="nav-item nav-link" href="#sec4">Contact</a>
                  </div>
                </div>
              </nav>
            </div>
        )
    }

}

export default Navbar;