import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {
  state = {
    response: '',
    userId: ''
  };

  somaValores(e) {
    e.preventDefault()

  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
        .post('/post', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name] : [e.target.value] })
  }

  renderText() {
    return (
      <div>
        {this.state.response}
        {this.state.userId}
      </div>
    )
  }

  renderTable() {
    const { userId, title, body } = this.state
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="userId" valeu={userId} onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type="text" name="title" valeu={title} onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type="text" name="body" valeu={body} onChange={this.changeHandler}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }


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
        <div>
          {this.renderTable()}
          {this.renderText()}
        </div>
      </div>
    );
  }
}

export default App;