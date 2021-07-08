import React from 'react';
import './footer.css';
const Footer = (props) =>{

    return(
        <div className = "footer">
            <div className = 'footimg'><img src = {'props.chuck3'} alt=""/></div>
            <div><p>some jokes may contain explicit language</p></div>
        </div>
    )
}

export default Footer;
