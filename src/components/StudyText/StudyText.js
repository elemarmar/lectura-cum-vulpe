import React from 'react';
import WordsText from '../WordsText/WordsText';
import axios from 'axios';
import './StudyText.css';

class StudyText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['This', 'is', 'an', 'important', 'sentence'],
      translations: {},
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
    if (!this.state.translations[word]) {
      this.getTranslationsApi(word);
    } else {
      const updatedTranslations = this.state.translations;
      updatedTranslations[word] = '';
      this.setState({
        translations: updatedTranslations
      })
      // this.setState({
      //   translations: {
      //     [word]: ''
      //   }
      // })
    }

  };

  getTranslationsApi = (word) => {
    let lastClickedWord = word;
    axios
      .get(`https://api.mymemory.translated.net/get?q=${word}&langpair=de|en`)
      .then((response) => {
        console.log(response.data.responseData.translatedText);
            if (lastClickedWord === word) {
              const updatedTranslations = this.state.translations;
              updatedTranslations[word] = response.data.responseData.translatedText;
              this.setState({
                translations: updatedTranslations
              })
            }
      });
  };

  render() {
    return (
      <div className="content">
            <WordsText 
                data={this.state.data}
                translations={this.state.translations}
                onClickHandle={this.onClickHandle}/>
      </div>
    );

  }
}

export default StudyText;
