/* the header can be easily customozed by changing the images and text and 
reused*/

import React  from 'react';
import Logo from '../assets/logo.jpg';

const Header = () =>{
    return (
        <header>
            <div className="headerContainer">
                <img src={Logo} alt="analytics" className="headerImg" />
                <div>
                  <h1 className="headerTitle"><span className="title-emphasis ">HEATMAP CALENDAR</span> WITH A <br /><span className="title-emphasis">SQUEEKY CLEAN</span> DESIGN.</h1>
                  <br />
                  <small>The component expands to size of container  <br />and is super configurable.</small> <br />
                  <br />
                  <input className="learnMore" type="button" value="LEARN MORE" />       
                </div>
            </div>
         <div className="blueHeader">
              <h2 className="blueTitle">CREATE A <span className="title-emphasis">POWERFUL</span> VISUALIZATION NOW!</h2>
            </div>
        </header>
    );
}

export default Header;