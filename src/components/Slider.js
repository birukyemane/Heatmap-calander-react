import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = (props) => {
    return (
        <div className="slider"> 
            <FontAwesomeIcon icon="backward"></FontAwesomeIcon>
            <h2>{props.year}</h2>
            <FontAwesomeIcon icon="forward"></FontAwesomeIcon>
        </div>
    );
}

export default Slider;