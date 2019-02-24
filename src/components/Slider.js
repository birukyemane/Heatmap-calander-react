import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = (props) => {
    const {prev, next} = props;
    return (
        <div className="slider"> 
            <FontAwesomeIcon className="arrow" icon="backward" onClick={prev}></FontAwesomeIcon>
            <h2 className>{props.year}</h2>
            <FontAwesomeIcon className="arrow" icon="forward" onClick={next}></FontAwesomeIcon>
        </div>
    );
}

export default Slider;