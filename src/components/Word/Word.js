import React from 'react';

import './Word.css'

const StudyText = (props) => {

    return (
        <span 
            className="Word"    
            data-p={props.id}
            onClick={props.clicked}>{props.word}</span>

    );
}

export default StudyText;