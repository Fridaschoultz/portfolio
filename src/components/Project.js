import React from 'react';
import '../style/Project.css';
import { useSpring, animated as a } from "react-spring";

const Project = () => {
    const [greetingStatus1, displayGreeting1] = React.useState(false);
    const [greetingStatus2, displayGreeting2] = React.useState(false);
    const [greetingStatus3, displayGreeting3] = React.useState(false);
    const [greetingStatus4, displayGreeting4] = React.useState(false);
    const [greetingStatus5, displayGreeting5] = React.useState(false);
    const [greetingStatus6, displayGreeting6] = React.useState(false);
    // const [greetingStatus7, displayGreeting7] = React.useState(false);
    
    // Project 1
    const contentProps_p1_e = useSpring({
        transform: greetingStatus1 ? 'scale(1.8)' : 'scale(1.0)',
        zIndex: 2
    });
    const contentProps_p1_ex = useSpring({
        transform: greetingStatus1 ? 'scale(1.0)' : 'scale(2)',
        zIndex: 1
    });

    //Project 2
    const contentProps_p2_e = useSpring({
        transform: greetingStatus2 ? 'scale(1.8)' : 'scale(1.0)',
        zIndex: 2
    });
    const contentProps_p2_ex = useSpring({
        transform: greetingStatus2 ? 'scale(1.0)' : 'scale(2)',
        zIndex: 1
    });

    //Project 3
    const contentProps_p3_e = useSpring({
        transform: greetingStatus3 ? 'scale(1.8)' : 'scale(1.0)',
        zIndex: 2
    });
    const contentProps_p3_ex = useSpring({
        transform: greetingStatus3 ? 'scale(1.0)' : 'scale(2)',
        zIndex: 1
    });

    //Project 4
    const contentProps_p4_e = useSpring({
        transform: greetingStatus4 ? 'scale(1.8)' : 'scale(1.0)',
        zIndex: 2
    });
    const contentProps_p4_ex = useSpring({
        transform: greetingStatus4 ? 'scale(1.0)' : 'scale(2)',
        zIndex: 1
    });

    //Project 5
    const contentProps_p5_e = useSpring({
        transform: greetingStatus5 ? 'scale(1.8)' : 'scale(1.0)',
        zIndex: 2
    });
    const contentProps_p5_ex = useSpring({
        transform: greetingStatus5 ? 'scale(1)' : 'scale(2)',
        zIndex: 1
    });

    //Project 6
    const contentProps_p6_e = useSpring({
        transform: greetingStatus6 ? 'scale(1.8)' : 'scale(1.0)',
        zIndex: 2
    });
    const contentProps_p6_ex = useSpring({
        transform: greetingStatus6 ? 'scale(1.0)' : 'scale(2)',
        zIndex: 1
    });

    //Project 7
    // const contentProps_p7_e = useSpring({
    //     transform: greetingStatus7 ? 'scale(1.4)' : 'scale(1.0)',
    //     zIndex: 2
    // });
    // const contentProps_p7_ex = useSpring({
    //     transform: greetingStatus7 ? 'scale(1.0)' : 'scale(2)',
    //     zIndex: 1
    // });
        return (
            <div className="container_project_main">
                <div className="left_side">
                    <p className="headline_leftside">PROJECTS.</p>
                    <p className="line_top_t"></p>
                    <p className="line_bottom_t"></p>
                </div>

                <div className="right_side">
                    <a.div onMouseLeave={() => displayGreeting1(a => !a)} onMouseEnter={() => displayGreeting1(a => !a)} className="container_project_pro" style={contentProps_p1_ex}  style={contentProps_p1_e}>
                        <h1 className="cont_header_text">Project 1</h1>
                        <p className="cont_header_text">HEFSDFMLSDFJLSDFL</p>
                        <a href="#">link to project</a>
                    </a.div>

                    <a.div onMouseLeave={() => displayGreeting2(a => !a)} onMouseEnter={() => displayGreeting2(a => !a)} className="container_project_pro" style={contentProps_p2_ex}  style={contentProps_p2_e}>
                        <h1 className="cont_header_text">Project 2</h1>
                        <p className="cont_header_text">HEFSDFMLSDFJLSDFL</p>
                        <a href="#">link to project</a>
                    </a.div>

                    <a.div onMouseLeave={() => displayGreeting3(a => !a)} onMouseEnter={() => displayGreeting3(a => !a)} className="container_project_pro" style={contentProps_p3_ex}  style={contentProps_p3_e}>
                        <h1 className="cont_header_text">Project 3</h1>
                        <p className="cont_header_text">HEFSDFMLSDFJLSDFL</p>
                        <a href="#">link to project</a>
                    </a.div>

                    <a.div onMouseLeave={() => displayGreeting4(a => !a)} onMouseEnter={() => displayGreeting4(a => !a)} className="container_project_pro" style={contentProps_p4_ex}  style={contentProps_p4_e}>
                        <h1 className="cont_header_text">Project 4</h1>
                        <p className="cont_header_text">HEFSDFMLSDFJLSDFL</p>
                        <a href="#">link to project</a>
                    </a.div>

                    <a.div onMouseLeave={() => displayGreeting5(a => !a)} onMouseEnter={() => displayGreeting5(a => !a)} className="container_project_pro" style={contentProps_p5_ex}  style={contentProps_p5_e}>
                        <h1 className="cont_header_text">Project 5</h1>
                        <p className="cont_header_text">HEFSDFMLSDFJLSDFL</p>
                        <a href="#">link to project</a>
                    </a.div>

                    <a.div onMouseLeave={() => displayGreeting6(a => !a)} onMouseEnter={() => displayGreeting6(a => !a)} className="container_project_pro" style={contentProps_p6_ex}  style={contentProps_p6_e}>
                        <h1 className="cont_header_text">Project 6</h1>
                        <p className="cont_header_text">HEFSDFMLSDFJLSDFL</p>
                        <a href="#">link to project</a>
                    </a.div>

                    {/* <a.div onMouseLeave={() => displayGreeting7(a => !a)} onMouseEnter={() => displayGreeting7(a => !a)} className="container_project_pro" style={contentProps_p7_ex}  style={contentProps_p7_e}>
                        <h1 className="cont_header_text">Project 7</h1>
                        <p className="cont_header_text">HEFSDFMLSDFJLSDFL</p>
                    </a.div> */}
                </div>
            </div>
        )
}
export default Project;