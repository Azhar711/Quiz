import React from 'react';
import './Answer.css';

const AnswerComponent = (props) => {
    return (
        <div className="Answer">
            <div className="radio">
                <label style={{padding: '10%'}}>
                    <input
                        type="radio"
                        value="true"
                        checked={props.selectedOption === 'true'}
                        onChange={props.change}
                    />
                    True</label>
                <label>
                    <input
                        type="radio"
                        value="false"
                        checked={props.selectedOption === 'false'}
                        onChange={props.change}
                    />
                    False</label>
            </div>
        </div>
    );
}

export default AnswerComponent;