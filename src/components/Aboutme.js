import React, {Component} from 'react';
import '../style/Aboutme.css';
import { useSpring, animated as a } from "react-spring";
import Chart from './Chart'
import images from '../images/profil.jpg';

class Aboutme extends Component {

    constructor(){
        super();
        this.state={
            showMe:false
        }
    }

    operation(){
        this.setState({
            showMe: !this.state.showMe
        })
    }
    render(){
        return (            
            <div className="container_aboutme">
                {
                    this.state.showMe?

                <div className="container_aboutmepage_notshow">
                    <div className="container_show">
                        <a.button onClick={()=>this.operation()}  type="button" class="btn btn-secondary btn-lg button_aboutme_show">BACK</a.button>
                        <p className="headline_show">ABOUT ME.</p>  
                    </div>
                    <div className="container_show_text">
                        <div className="container_show_text_above"> 
                        <h2>Hey there, i'm Frida Schoultz. Nice to meet ya!</h2>
                        <br></br>
                        <p>Born in Huddinge, Stockholm 1989. Currently studying Frontend development at Nackademin in Stockholm. This fall/winter i will be doing my internship at
                            Cybercom in stockholm as a part of my syllabus. I will be part of a team called Innovation Zone where we are going to be working with SmartLog, wich is a
                            project developed for using machine learning in order to predict how a system will preform. 
                            
                        </p> 
                        <br></br>

                        </div>
                            <div className="container_show_img">
                            <img src={images} alt="Profil" />
                            </div>
                    </div>

                    <div className="container_show_text_below">
                            <div className="container_show_text_below_left">
                                <h5>DESIGN</h5>
                                <br></br>
                                <p>I belive design should be telling a story about the person/persons or a company and who they are. If a product or a service is the blank canvas with 
                                    some structure, the design is the painting brush that brings every aspect of the product or service to life. As we are going forward with
                                    giant steps, in terms of technology in our lifes, the need for being true and authentic to our design is becoming more important than ever. 
                                </p>
                            </div>
                            <div className="container_show_text_below_middle">
                                <h5>TECHNOLOGY</h5>
                                <br></br>
                                <p>The interest in technology and frontend development emerged when I realized all the opportunities that exist and how much you can do. 
                                    For me, the driving force is rooted in a curiosity for the dynamics of Frontend and technology as a whole. To think that a little bit of code and 
                                    story telling design actually can make a big difference in people's lifes is pretty darn cool.
                                    The technical development is constantly taking great strides forward and I want to be a part of this journey and see where it takes us.</p>
                            </div>
                            <div className="container_show_text_below_right">
                                <h5>STORY</h5>
                                <br></br>
                                <p> I love when a product or a services can make a story telling design, both from a user friendly
                                    perspective and from a personal standpoint. We need good design as we are making technology a more bigger part of our lifes and therefore we need to make sure we attract
                                    people with something that feels real. I belive this will be at the core of tomorrows technology.</p>
                            </div>

                        

                    </div>
                    
                            <div>
                                 <Chart/> 
                            </div> 
                            
                </div>
                :null
                 }
           
                <div className="left_side_a">
                    <p className="headline_leftside_s">ABOUT ME.</p>
                    <p className="line_top_t"></p>
                    <p className="line_bottom_t"></p>
                    <a.button onClick={()=>this.operation()}  type="button" class="btn btn-secondary btn-lg button_aboutme">SHOW MORE</a.button>      
                </div>

                <div className="right_side_a">
                    <div className="container_look">
                        <h1 className="cont_header_text">HEY THERE, I'M FRIDA SCHOULTZ. NICE TO MEET YA!</h1>

                        <div className="container_first_image">
                            <img src={images} alt="Profil" />
                            </div>

                        <p>Don't be a stranger. I'd love to talk. Click the <mark>SHOW MORE</mark> button and check out more about me. </p>

                    </div>
                </div>
             




            </div>
            
        )
        }
}
export default Aboutme;