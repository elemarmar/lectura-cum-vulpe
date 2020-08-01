import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from '../../components/Home/Home';
import StudyText from '../../components/StudyText/StudyText';
import NavMenu from '../../components/NavMenu/NavMenu';


import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler(event) {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile);
    axios.post("http://localhost:8000/upload", data, { 
      // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
      console.log(res.statusText)
      this.forceUpdate();
    })
}



  render() {

    return (
      <div className="App">
        <h1>Lang-reader</h1>
        <NavMenu />
        <Switch>
          <Route 
            exact 
            path='/' 
            render={(props) => (
              <Home 
                onChangeHandler={this.onChangeHandler}
                onClickHandler={this.onClickHandler}/>)} />
          <Route 
            path='/study' 
            render={(props) => (
              <StudyText  
                text={this.state.textArray} />)} />
        </Switch>
  
      </div>
    );
  }

}

export default App;
