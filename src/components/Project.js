import React from 'react';
import '../style/Project.css';
import { useSpring, animated as a } from "react-spring";
import pic15 from '../images/pic15.png';
import pic38 from '../images/pic38.png';
import pic20re2 from '../images/pic20re2.png';
import pic30 from '../images/pic30.png';
import pic39 from '../images/pic39.png';
import pic36 from '../images/pic36.png';
import pic40 from '../images/pic40.png';
// import pic23 from '../images/pic23.jpg';


const Project = () => {

    const operationShow = () =>{
        document.getElementById("front_pro").style.zIndex = "0";
        var x = document.getElementById("back_pro");
        x.style.display = "block";
    }

    const operationHide = () =>{
        document.getElementById("front_pro").style.zIndex = "5";
        var x = document.getElementById("back_pro");
        x.style.display = "none";
    }
        return (
            <div className="container_project_main">
                <div id='front_pro' className='container_pro_show'>  
                    <div className="left_side">
                        <p className="headline_leftside_header">PROJECTS.</p>
                        <a.button onClick={operationShow}  type="button" class="btn btn-secondary btn-lg button_project">SHOW MORE</a.button>   
                        <p className="headline_leftside_text">Some of my projects that i've been working on in school</p>
                        <p className="line_top_t"></p>
                        <p className="line_bottom_t"></p>
                    </div>


                    <div className="right_side">
                        
                        <img className='project_first_img' src={pic15} alt="Pic15" />
                        
                    </div>

                </div>
                <div id='back_pro' className='container_pro_hidden'>
                    
                    
                    <div className="top_headline_pro">
                        <a.button onClick={operationHide}  type="button" class="btn btn-secondary btn-lg button_project_behind">BACK</a.button>  
                        <p className="top_headline_pro_tex_big">PROJECTS.</p>     
                    </div>

                    
                    
                    
                    <div className='container_pro_inner'>

                    <div  className="container_project_pro">
                        <div className='p_left'>
                        <h3 className='container_header_pro' >Project 1</h3>
                        <a className='cont_header_text_link' target='_blank' href="https://fridaschoultz.nu">link to project</a>
                            <p className="cont_p_text">This was my first portfolio that i made that is up on my domain. I made this in our course in Frontend projects and the task 
                            was to make something with Javascript and HTML&CSS that we could use in our portfolio when we applied for future jobs. I used javascript mixed with
                            jQuery to get the animation that i wanted. The HTML&CSS part is just basic files that i worked with. But the goal was to gain some knowledge in jQuery
                            and to build something partially from scratch without any plug-ins or templates, except from jQuery. On the first page i have an navigation bar that is
                            in a fixed position (css rules) so that it follows down when you scroll the page. Each section is a jQuery animation so when you press on a section it 
                            rolls out and reveals more information on the screen.
                            </p>
                        </div>  
                            <div className='p_right'>

                                 <img className='project_img_1' src={pic20re2} alt="Pic15" />
                                 <img className='project_img_1' src={pic38} alt="Pic15" /> 


                            </div> 
                    </div>

                    <div  className="container_project_pro">
                        <div className='p_left'>
                        <p className="container_header_pro">Project 2</p>
                        <a className='cont_header_text_link' target='_blank' href="https://fridaschoultz.github.io/webbshop/">link to project</a>
                            <p className="cont_p_text">This was a group project in our Javascript 2 course. The task was to make a webshop of anything and we chose books.
                            On the first page you'll see all the books with their book title, the price and a little bit of information about the book. We also included stars for the books 
                            so that the potential readers can se a small review of the book. Beside the 'Köp' button we have arrows that goes up and down so that you can decide the amount
                            of the books directly before pressing 'Köp' (buy). When you clicked the 'Köp' button it goes to checkout and there you will see the book/books and the amount
                            of each of them. You can also click the 'X' button to remove the amount, or the red button to remove the whole cart. Here you also have the option to press 
                            the arrows up and down for the amount that you want. If you want to buy some more books just press the lightblue button on the top to go back to the store.
                            When you are finished, just fill in the checkout form with you details and click the green 'köp' button and you'll see a compilation of the order you purchased.

                            </p>
                        </div>  
                            <div className='p_right'>
                                <img className='project_img_2' src={pic30} alt="Pic30" />
                                <img className='project_img_2' src={pic39} alt="Pic30" />  
                            </div> 
                    </div>

                     <div  className="container_project_pro">
                        <div className='p_left'>
                        <h3 className="container_header_pro">Project 3</h3>
                        <a className="cont_header_text_link" target='_blank' href="https://fridaschoultz.github.io/Frontend-projekt-grupp/index.html">link to project</a>
                            <p className="cont_p_text">This was a group project in the Frontend projects course and the task was to make a Frontend tutorial
                                site that showed different tutorials of Javasvript, HTML&CSS and a some kind of editing program for photos. We chose Abode XD which is a 
                                vector-based user experience design tool for web apps and mobile apps. We divided the the task into four and i ended up getting the HTML&CSS page.
                                I decided to make a tutorial of basic HTML structures by putting the HTML code and the results beside each other so you easly could see the
                                structured HTML code and what it rendered.
                            </p>
                        </div>  
                            <div className='p_right'>
                                <img className='project_img_3' src={pic36} alt="Pic40" />  
                                <img className='project_img_3' src={pic40} alt="Pic40" />  
                            </div> 
                    </div> 

                    {/* <div  className="container_project_pro">
                        <div className='p_left'>
                        <h3 className="cont_header_text">Project 4</h3>
                        <a className="cont_header_text_link" href="https://fridaschoultz.github.io/webbshop/">link to project</a>
                            <p className="cont_p_text">This was another group project in the course Frontend projects and the task was to make a Frontend tutorial
                        site that showed different tutorials of Javasvript, HTML&CSS and Abode XD which is a vector-based user experience design tool for web apps and mobile apps.
                            </p>
                        </div>  
                            <div className='p_right'>
                                <img className='project_img_4' src={pic23} alt="Pic23" />  
                            </div> 
                    </div> */}
                        
                    </div>
                </div>
            </div>
        )
}
export default Project;