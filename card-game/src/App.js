import React, { Component } from 'react'
import './App.css';
import logo from './logo.svg';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import { Container } from 'react-bootstrap';



const word = "Hello"
var wordList = ["Hello","React","JSX","Computer"]

var num  = Math.floor((Math.random()* 4));
class App extends Component {

  render() {
    return (
      <div className="App" style={{backgroundColor: '#FDEDEC',height:'683px'}}>
      
        <header><img src={logo} className="App-logo" alt="logo" /></header>
        <WordCard value={wordList[num]} />
        {console.log(wordList[num])}
        
      
      </div>
    )
  }
}


export default App;
