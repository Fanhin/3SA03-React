import React, { Component } from 'react'
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';


const word = "Hello"
const wordList = ["Hello","React","JavaScript"]

const num = ()=> Math.random(3)
class App extends Component {

  

  
  render() {
    return (
      <div className="App">
        <WordCard value={word} />
  
      </div>
    )
  }
}


export default App;
