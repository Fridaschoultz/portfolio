import React from 'react';
import '../style/Aboutme.css';
// import Anime from 'react-anime';

class Aboutme extends React.Component{
    render() {
        // let animation_left = {
        //     opacity: [0,1],
        //     translateX: [-600,0],
        //     duration: 3000,
        //     delay: 2000
        //   }
        //   let animation_right = {
        //     opacity: [0,1],
        //     translateX: [600,0],
        //     duration: 3000,
        //     delay: 2500
        //   }
        return (
            
            <div className="container">
            {/* <Anime {...animation_left} > */}
                <div className="container_look">
                    <h1 className="cont_header_text">About me</h1>
                    <p>HEFSDFMLSDFJLSDFL</p>
                </div>
            {/* </Anime> */}
                
            {/* <Anime {...animation_right} > */}
                <div className="container_look">
                    <h1 className="cont_header_text">About me</h1>
                    <p>HEFSDFMLSDFJLSDFL</p>
                </div>
            {/* </Anime> */}

            </div>
            
        )
    }

}
export default Aboutme;