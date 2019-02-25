/* A slider component that allows user to select differnt years. It is same principle as 
a gallery. user clicks next or previous to see heat map for different years.*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // fontswsome icon for React

const Slider = (props) => {
    const {prev, next, year} = props; // destructure to get prev and next functioins and the current year(selected by user)
    const fowrwardArrowClass = (year===2019?'arrow--disabled':'arrow'); // if year is 2019 next arrow is disabled 
    const backwardArrowClass = (year===2015?'arrow--disabled':'arrow'); // if year is 2015 previous arrow is disabled 
    return (
        <div className="slider"> 
            <FontAwesomeIcon className={backwardArrowClass} icon="backward" onClick={prev}></FontAwesomeIcon> {/* call previos when user clicks the backward arrow */}
            <h4 className="slider-title">{year}</h4>
            <FontAwesomeIcon className={fowrwardArrowClass} icon="forward" onClick={next}></FontAwesomeIcon> {/* call next when user clicks the forward arrow */}
        </div>
    );
}

export default Slider;