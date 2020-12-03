import React, {Component} from 'react';
import '../style/Aboutme.css';
import { useSpring, animated as a } from "react-spring";
import Chart from './Chart'
import images from '../images/profil.jpg';
import pic41 from '../images/pic41.jpg';

const Aboutme = () => {

    const operationShow = () =>{
        document.getElementById("front_cont_show").style.zIndex = "0";
        var x = document.getElementById("back_cont");
        x.style.display = "block";
    }

    const operationHide = () =>{
        document.getElementById("front_cont_show").style.zIndex = "3";
        var x = document.getElementById("back_cont");
        x.style.display = "none";
    }
    
        return (            
            <div className="container_aboutme">
                

                <div id='back_cont' className="container_aboutmepage_notshow">
                    <div className="container_show">
                        <a.button onClick={operationHide}  type="button" class="btn btn-secondary btn-lg button_aboutme_back">BACK</a.button>
                        <p className="headline_show_b_about">ABOUT ME.</p>  
                    </div>
                    <div className="container_show_text">
                        <div className="container_show_text_above"> 
                        <h1>Hey there, i'm Frida Schoultz. Nice to meet ya!</h1>
                        <br></br>
                        <p> My name is Frida and i'm a junior Frontend developer and i'm currently looking for new challenges and opportunities where I can learn more and grow. 
                            I studied at Nackademin in Stockholm and took my degree this spring. I am a happy and driven person who likes group dynamics as much as working by myself 
                            and i definitely think you grow when you unpretentiously shares each other's knowledge and experience.
                            <br></br>
                            <br></br>
                            <p>
                                
                                In my free time I like to hang out with friends, take walks and practice Thai boxing sometimes. 
                                I also like to spend time out on my country place on Värmdö where nature and the archipelago are around the corner. 
                                Film and music are also interests that make me relax and recharge my batteries, and together with some friends 
                                I have a much appreciated book club that is in its fourth year now.
                            </p>
                            
                        </p> 
                        <br></br>

                        </div>
                            <div className="container_show_img">
                            <img src={images} alt="profil" />
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
                                    story-telling design actually can make a big difference in people's lifes, is pretty darn cool.
                                    The technical development is constantly taking great strides forward and I want to be a part of this journey and see where it takes us.</p>
                            </div>
                            <div className="container_show_text_below_right">
                                <h5>STORY</h5>
                                <br></br>
                                <p> I love when a product or a services can make a story telling-design, both from a user friendly
                                    perspective and from a personal standpoint. We need good design as we are making technology a more bigger part of our lifes and therefore we need to make sure we attract
                                    people with something that feels real. I belive this will be at the core of tomorrows technology.</p>
                            </div>

                        

                    </div>
                    
                            <div className="chart_div">
                                <div className="skill_set_title">SKILL SET (%)</div>
                                 <Chart/> 
                            </div> 
                            
                </div>
                 
                <div id='front_cont_show' className='container_aboutmepage_show'>
                <div className="left_side_a">
                    <p className="headline_leftside_aboutme">ABOUT ME.</p>
                    <p className="line_top_aboutme"></p>
                    <p className="line_bottom_aboutme"></p>
                    <a.button onClick={operationShow}  type="button" class="btn btn-secondary btn-lg button_aboutme_show">SHOW MORE</a.button>      
                </div>

                <div className="right_side_a">
                    <div className="container_look">

                        <div>
                              <img className="container_first_image" src={pic41} alt="Profil" /> 
                        </div>

                        <div className='cont_text_p'> 
                        <p>Don't be a stranger. I'd love to talk. Click the <mark className="mark_aboutme">SHOW MORE</mark> button and check out more about me or contact me on the information below. </p>
                        <br></br>
                        <p>Contact me at <mark  className="mark_aboutme">fridaschoultz@gmail.com</mark></p>
                        <p>LinkedIn</p><a className="icon_linkedIn" target="_blank" href="https://www.linkedin.com/in/frida-schoultz-683162172/"><i class="fa fa-linkedin fa-lg"></i></a>
                        </div>
                    </div>
                </div>
                </div>
             




            </div>
            
        )
        
}
export default Aboutme;