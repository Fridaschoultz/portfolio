import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Project from './components/Project'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
    return (
      <div>
        <div>
          <Navbar/>
          </div>
        <div className="section1">
          <div id="sec1"></div>
          <div className="section1_content">
            <Home/>
          </div>
        </div>

        <div className="section2">
          <div className="section2_content">
          <div id="sec2"></div>
            <Project/>
          </div>
        </div>

        <div className="section3">
          <div className="section3_content">
            <div id="sec3"></div> 
            <Aboutme/>
          </div>
        </div>
      </div>
    );
}
export default App;
