import React from 'react';
import Word from '../Word/Word'
import axios from 'axios';




const sentence = ['This', 'is', 'a', 'sentence'];

class StudyText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            translates: {
                this: 'esto',
                word: 'palabra'
            },
            word: ''
        }
        this.onClickHandle = this.onClickHandle.bind(this);
    }

    onClickHandle = (ev) => {
        const target = ev.target;
        const word =target.innerHTML;
        this.getTranslationsApi(word)
    }

    getTranslationsApi = (word) => {
        lastClickedWord= word
        axios.get(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|es`)
        .then(response => {
            console.log(response.data.responseData.translatedText);
            // meter en el estado
            if (lastClickedWord === word) {

                console.log(word, esponse.data.responseData.translatedText)
            }
          });
    }


    render() {
        return (sentence.map(word => {
            return <Word 
                id={sentence.indexOf(word)}
                key={sentence.indexOf(word)}
                clicked={this.onClickHandle}
                word={word} 
                />
        }))
    }
}

export default StudyText;