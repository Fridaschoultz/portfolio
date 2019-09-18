import React from 'react';
import './App.css';
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Project from './components/Project'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends React.Component{
  render() {
    return (
      <div>
        <div id="sec1" className="section1">
        <Header/>
          <div className="section1_content">
            <Home/>
          </div>
        </div>
        
        <div id="sec2" className="section2">
          <div className="section2_content">
            <Project/>
          </div>
        </div>

        <div id="sec3" className="section3">
          <div className="section3_content">
            <Aboutme/>
          </div>
        </div>

        <div id="sec4" className="section4">
          <div className="section4_content">
            <Contact/>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;

