import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from '../../components/Home/Home';
import StudyText from '../../components/StudyText/StudyText';
import NavMenu from '../../components/NavMenu/NavMenu';

import logo from '../../assets/images/logo.jpg';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      isUpload: true,
      copiedText: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.changeTextMethodToUpload = this.changeTextMethodToUpload.bind(this);
    this.changeTextMethodToCopy = this.changeTextMethodToCopy.bind(this);
  }

  onChangeHandler(event) {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  }

  onTextChangeHandler(event) {
    console.log(event.target.value);
    this.setState({
      copiedText: event.target.value,
    });
  }

  onClickHandler = () => {
    const data = new FormData();

    if (this.state.isUpload) {
      data.append('file', this.state.selectedFile);
      axios
        .post('http://localhost:8000/upload', data, {
          // receive two parameter endpoint url ,form data
        })
        .then((res) => {
          // then print response status
          console.log(res.statusText);
          this.forceUpdate();
        });
    } else {
      data.append('copiedtext', this.state.copiedText);
      axios.post('http://localhost:8000/upload', data, {}).then((res) => {
        console.log(res.statusText);
        this.forceUpdate();
      });
    }
  };

  changeTextMethodToCopy = () => {
    this.setState({ isUpload: false });
  };

  changeTextMethodToUpload = () => {
    this.setState({ isUpload: true });
  };

  render() {
    return (
      <div className='App'>
        <h1>
          <img className='App-logo' src={logo} />
        </h1>
        <NavMenu />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Home
                onChangeHandler={this.onChangeHandler}
                onTextChangeHandler={this.onTextChangeHandler}
                onClickHandler={this.onClickHandler}
                isUpload={this.state.isUpload}
                textValue={this.state.copiedText}
                uploadMethodClick={this.changeTextMethodToUpload}
                copyMethodClick={this.changeTextMethodToCopy}
              />
            )}
          />
          <Route
            path='/study'
            render={(props) => <StudyText text={this.state.textArray} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
