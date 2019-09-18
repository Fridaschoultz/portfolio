import React from 'react';
import '../style/Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <div className="foot">
                {/* <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                <i class="far fa-envelope fa-lg fa-2x"></i> */}
                <p className="line_top_footer"></p>
                <p className="copyright">© 2018 Copyright</p>
                <p className="line_bottom_footer"></p>
                
            </div>
        )
    }
}

export default Footer;