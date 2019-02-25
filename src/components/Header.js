import React  from 'react';
import Logo from '../assets/logo.jpg'

const Header = () =>{
    return (
        <header>
            <div className="headerContainer">
                <img src={Logo} alt="analytics" className="headerImg" />
                <div>
                  <h1 className="headerTitle"><emphasis className="title-emphasis ">HEATMAP CALENDAR</emphasis> WITH A <br /><emphasis className="title-emphasis">SQUEEKY CLEAN</emphasis> DESIGN.</h1>
                  <br />
                  <small>The component expands to size of container  <br />and is super configurable.</small> <br />
                  <br />
                  <input className="learnMore" type="button" value="LEARN MORE" />       
                </div>
            </div>
         <div className="blueHeader">
              <h2 className="blueTitle">CREATE A <emphasis className="title-emphasis">POWERFUL</emphasis> VISUALIZATION NOW!</h2>
            </div>
        </header>
    );
}

export default Header;