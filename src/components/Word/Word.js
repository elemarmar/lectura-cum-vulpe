import React from 'react';

import './Word.css';

const StudyText = (props) => {
  let content = (
    <span className='Word' data-p={props.id} onClick={props.clicked}>
      {props.word}
    </span>
  );

  if (props.translation) {
    content = (
      <div className='WordTranslated'>
        <span className='translation'>{props.translation}</span>
        <span
          className='Word original'
          data-p={props.id}
          onClick={props.clicked}
        >
          {props.word}
        </span>
      </div>
    );
  }

  return content;
};

export default StudyText;
