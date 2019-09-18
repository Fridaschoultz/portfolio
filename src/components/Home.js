import React from 'react';
import '../style/Home.css';

class Home extends React.Component{
    render() {
        return (
            <div className="container_home">
                <div className="container_left">
                        <div>
                            <h1 className="cont_header_text_left_top">ROBAR</h1>
                            <h1 className="cont_header_text_left_bottom">ZANGANA</h1>
                            <p className="line_top"></p>
                            <p className="line_bottom"></p>
                            <p className="header_text">computer engineering student</p>
                        </div>
                </div>
            
                <div className="container_right">
                        <div>
                            <h1 className="cont_header_text_right">PORTFOLIO</h1>
                        </div>
                </div>
            </div>
            
        )
    }

}
export default Home;