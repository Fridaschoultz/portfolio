import React from 'react';
import '../style/Home.css';
import { useSpring, animated as a } from "react-spring";

const Home = () => {
    const contentTop = useSpring({
        config: { duration: 500 },
        opacity: 1, from: {opacity: 0},
        marginLeft: 70, from: {marginLeft:-500}
    });
    const contentBottom = useSpring({
        delay: 800,
        opacity: 1, from: {opacity: 0}
    });
    const contentRight = useSpring({
        config: { duration: 1000 },
        delay: 1000,
        opacity: 1, from: {opacity: 0},
        marginLeft: 0, from: {marginLeft:1400}
    });
    return (
        <div className="container_home">
            <div className="container_left">
                <a.h1 className="cont_header_text_left_top" style={contentTop}>FRIDA</a.h1>
                <a.h1 className="cont_header_text_left_bottom" style={contentTop}>SCHOULTZ</a.h1>
                <p className="line_top"></p>
                <p className="line_bottom"></p>
                <a.p className="header_text" style={contentBottom}>Frontend developer student</a.p>
            </div>
            <div className="container_right">
                    <a.h1 className="cont_header_text_right" style={contentRight}>PORTFOLIO</a.h1>
            </div>
        </div>
    )

}
export default Home;