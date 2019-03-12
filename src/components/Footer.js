/* A footer component. The footer contents can be a component of thier own*/
import React  from 'react';

const Footer = () =>{
    return (
        <footer>
            <section >
                <p>Biruk Yemane, Junior front-end developer, Helsinki<br />
                Copyright &copy; 2019, Biruk Yemane. All right reserved.</p>
                <i className="fa fa-twitter-square"></i>
            </section>    
        </footer>
    ); 
}

export default Footer;