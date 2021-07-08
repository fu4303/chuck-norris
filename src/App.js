import React, { Component } from 'react';
import RandomJokes from './randomjokes/randomjokes';
import NewJoke from './newjoke/newjoke';
import Footer from './footer/footer';
import Chuck3 from './images/Chuck3.png';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      joke: '',
      img: undefined
    }
  }

  componentDidMount(){
    this.newJokeHandler();
  }

  newJokeHandler = async (e) =>{
    const api_call = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      joke: data.value,
      img: data.icon_url
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <header>
            <h1>Chuck Norris Jokes <img src={'this.state.img'} alt=""/></h1>
          </header>
        </div>
        <RandomJokes joke={this.state.joke}/>
        <NewJoke newJokeHandler = {this.newJokeHandler}/>
        <Footer chuck3 = {Chuck3}/>
      </div>
    );
  }
}

export default App;
