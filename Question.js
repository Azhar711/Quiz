import React from 'react';
import './Question.css';

const QuestionComponent = (props) =>{
    return(
        <div>
            <h2>{props.header}</h2>
            <div>
            <div className="content">
            <p>{props.question}</p>
                </div>
            </div>
            
            <h4>{props.correctAnswer}</h4>
        </div>
    );
}

export default QuestionComponent;