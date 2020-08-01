import React from 'react';
import Word from '../Word/Word';


const WordsText = ( props ) => {
    
    return ( props.data.map((word, index) => {
            return (
              <Word
                id={index}
                key={index}
                clicked={props.onClickHandle}
                word={word}
                translation={props.translations[word]}
              />
            );
          })
    );
}


export default WordsText;