/* A footer component. The footer contents can be a component of thier own*/
import React  from 'react';

const Footer = () =>{
    return (
        <footer>
            <div className="footerHolder">
                <div className="footerContent"> {/*this part can be a componet of its own */}
                    <h3 className="title">AbOUT US</h3>
                    <p>okänd boksättare tog att antal bokstäver och blandade dem 
                    för att göra ett provexemplar av en bok. Lorem ipsum har inte 
                    bara överlevt fem århundraden, utan</p>
                </div>
                <div className="footerContent">
                    <h3 className="title">LATEST TWEETS</h3>
                    <p>ookänd boksättare tog att antal bokstäver och blandade 
                        dem för att göra ett provexemplar
                        av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan</p>
                </div>
                <div className="footerContent">
                    <h3 className="title">LATEST POSTS</h3>
                    <p>okänd boksättare tog att antal bokstäver och blandade
                        dem för att göra ett provexempla
                        r av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan</p>
                </div>
                <div className="footerContent">
                    <h3 className="title">FLICKER</h3>
                    <p>okänd boksättare tog att antal bokstäver och blandade dem för 
                        att göra ett provexemplar 
                        av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan</p>
                </div>
            </div>
            <section >
                <p>Biruk Yemane, Junior front-end developer, Helsinki<br />
                Copyright &copy; 2019, Biruk Yemane. All right reserved.</p>
                <i className="fa fa-twitter-square"></i>
            </section>    
        </footer>
    ); 
}

export default Footer;