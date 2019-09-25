import React from 'react';
import '../style/Project.css';
import { useSpring, animated as a } from "react-spring";
import images from '../images/pic2.png';


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
                        
                        <img src={images} alt="Pic2" />
                        
                    </div>

                </div>
                <div id='back_pro' className='container_pro_hidden'>
                    
                    
                    <div className="top_headline_pro">
                        <a.button onClick={operationHide}  type="button" class="btn btn-secondary btn-lg button_project">BACK</a.button>  
                        <p className="top_headline_pro_tex_big">PROJECTS.</p>     
                    </div>

                    
                    
                    
                    <div className='container_pro_inner'>

                    <div  className="container_project_pro">
                        <div className='p_left'>
                        <h3 className="cont_header_text">Project 1</h3>
                        <a href="https://fridaschoultz.nu">link to project</a>
                            <p className="cont_header_text">This was my first portfolio that i made that is up on my domain. I made this in our course in Frontend projects and the task 
                            was to make something with Javascript and HTML&CSS that we could use in our portfolio when we applied for future jobs.
                            </p>
                        </div>  
                            <div className='p_right'>
                                <img className='project_img' src={images} alt="Pic2" />  
                            </div> 
                    </div>

                    <div  className="container_project_pro">
                        <div className='p_left'>
                        <h3 className="cont_header_text">Project 2</h3>
                        <a href="https://fridaschoultz.github.io/webbshop/">link to project</a>
                            <p className="cont_header_text">This was a group project in our Javascript 2 course. The task was to make a webshop of anything and we chose books. 
                            When you clicked the 'Köp' button it goes to checkout and there you will see the book/books and the amount of each of them. You can also click the 'X' button
                            to remove the amount or press the arrows up and down for the amount.
                            </p>
                        </div>  
                            <div className='p_right'>
                                <img className='project_img' src={images} alt="Pic2" />  
                            </div> 
                    </div>

                    <div  className="container_project_pro">
                        <div className='p_left'>
                        <h3 className="cont_header_text">Project 3</h3>
                        <a href="https://fridaschoultz.github.io/webbshop/">link to project</a>
                            <p className="cont_header_text">This was a group project in the backend course we had. The task was to make a blog where you could log in and write and delete
                        your own posts. You could also se others posts and make a comment them. We used the programming language PHP and sql for the databse in order to save all the users
                            </p>
                        </div>  
                            <div className='p_right'>
                                <img className='project_img' src={images} alt="Pic2" />  
                            </div> 
                    </div>

                    <div  className="container_project_pro">
                        <div className='p_left'>
                        <h3 className="cont_header_text">Project 4</h3>
                        <a href="https://fridaschoultz.github.io/webbshop/">link to project</a>
                            <p className="cont_header_text">This was another group project in the course Frontend projects and the task was to make a Frontend tutorial
                        site that showed different tutorials of Javasvript, HTML&CSS and Abode XD which is a vector-based user experience design tool for web apps and mobile apps.
                            </p>
                        </div>  
                            <div className='p_right'>
                                <img className='project_img' src={images} alt="Pic2" />  
                            </div> 
                    </div>
                        

                                     {/* <div className="container_project_pro project_5_img">
                                        <h1 className="cont_header_text_5">Project 5</h1>
                                        <a href="#">link to project</a>
                                        <div className="cont_header_text_5" ><p className="cont_header_text_5">This was a group project in our Javascript 2 course. The task was to make a webshop of anything and we chose books. 
                                            When you clicked the 'Köp' button it goes to checkout and there you will see the book/books and the amount of each of them. You can also click the 'X' button
                                            to remove the amount or press the arrows up and down for the amount.</p></div>
                                        </div> */}

                                {/* <div  className="container_project_pro project_6_img" >
                                    <h1 className="cont_header_text_6">Project 6</h1>
                                    <a href="#">link to project</a>
                                    <div className="cont_header_text_6" ><p className="cont_header_text_6">This was a group project in our Javascript 2 course. The task was to make a webshop of anything and we chose books. 
                                        When you clicked the 'Köp' button it goes to checkout and there you will see the book/books and the amount of each of them. You can also click the 'X' button
                                        to remove the amount or press the arrows up and down for the amount.</p></div>
                                </div>  */}
                    </div>
                </div>
            </div>
        )
}
export default Project;