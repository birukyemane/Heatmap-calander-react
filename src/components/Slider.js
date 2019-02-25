import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = (props) => {
    const {prev, next, year} = props;
    const fowrwardArrowClass = (year==2019?'arrow--disabled':'arrow');
    const backwardArrowClass = (year==2015?'arrow--disabled':'arrow');
    return (
        <div className="slider"> 
            <FontAwesomeIcon className={backwardArrowClass} icon="backward" onClick={prev}></FontAwesomeIcon>
            <h4 className="slider-title">{year}</h4>
            <FontAwesomeIcon className={fowrwardArrowClass} icon="forward" onClick={next}></FontAwesomeIcon>
        </div>
    );
}

export default Slider;