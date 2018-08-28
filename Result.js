import React from 'react';
import './Result.css';

const ResultComponent= (props)=>{
    return (
        <div className="Result">
            <span className="text">You scored {props.result}/10</span>
            <div className="Bottom">
            <span onClick={props.click} >
                Play Again
            </span>
                </div>
        </div>
    );
}

export default ResultComponent;