/* the header can be easily customozed by changing the images and text and 
reused*/

import React  from 'react';
import Logo from '../assets/logo.jpg';

const Header = () =>{
    return (
        <header>
            <div className="headerContainer">
                <div>
                  <h1 className="headerTitle title-emphasis">HEATMAP CALENDAR</h1>   
                </div>
            </div>
           
        </header>
    );
}

export default Header;