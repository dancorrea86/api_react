import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PostForm'
import PostForm from './components/PostForm';


class App extends Component {
  state = {
    response: '',
    user: ''
  };

  componentDidMount() {
    fetch('/api')
      .then(res => {return res.json()})
      .then(res => this.setState({ 
        response: res.express,
        user: res.userId }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          {this.state.response}{this.state.data}
        </p>
        <PostForm></PostForm>
      </div>
    );
  }
}

export default App;