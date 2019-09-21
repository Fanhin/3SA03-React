import React, { Component } from 'react'
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';



const word = "Hello"
var wordList = ["Hello","React","JSX","Computer"]

var num  = Math.floor((Math.random()* 4));
class App extends Component {

  render() {
    return (
      <div className="App">
        <WordCard value={wordList[num]} />
        {console.log(wordList[num])}
        
  
      </div>
    )
  }
}


export default App;
