import React from 'react';
import Word from '../Word/Word';
import axios from 'axios';
import './StudyText.css';

class StudyText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['This', 'is', 'an', 'important', 'sentence'],
      translates: {
        this: 'esto',
        word: 'palabra',
      },
      word: '',
    };
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  componentDidMount() {
    axios.get('data.json').then((response) => {
      console.log(response);
      this.setState({
        data: response.data,
      });
    });
  }

  onClickHandle = (ev) => {
    const target = ev.target;
    const word = target.innerHTML;
    this.getTranslationsApi(word);
  };

  getTranslationsApi = (word) => {
    // lastClickedWord= word
    axios
      .get(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|es`)
      .then((response) => {
        console.log(response.data.responseData.translatedText);
        // meter en el estado
        //     if (lastClickedWord === word) {

        //         console.log(word, esponse.data.responseData.translatedText)
        //     }
      });
  };

  render() {
    return this.state.data.map((word) => {
      return (
        <Word
          id={this.state.data.indexOf(word)}
          key={this.state.data.indexOf(word)}
          clicked={this.onClickHandle}
          word={word}
        />
      );
    });
  }
}

export default StudyText;
