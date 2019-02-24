import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = (props) => {
    const {prev, next} = props;
    return (
        <div className="slider"> 
            <FontAwesomeIcon icon="backward" onClick={prev}></FontAwesomeIcon>
            <h2>{props.year}</h2>
            <FontAwesomeIcon icon="forward" onClick={next}></FontAwesomeIcon>
        </div>
    );
}

export default Slider;