import React, { Component } from 'react'
import CharacterCard from './CharacterCard'
import _ from 'lodash'
import { Button } from 'react-bootstrap';



let prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess:[],
        completed:false
    }
}

export default class WordCard extends Component {

    constructor(props){
        super(props)
            this.state =prepareStateFromWord(this.props.value)
            
            
            
    }
    //activationHandler = (c) =>;

    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess.join('').toString() === this.state.word){
        this.setState({guess: [], completed: true})
        }else{
            this.setState({guess: [], attempt: this.state.attempt + 1})
            }
        }
        console.log(`${c} has been activated.`)
       }

       changState= (c)=>{
        this.setState({guess: [], attempt:this.state.attempt + 1})
        this.setState({completed:false})
        document.getElementById("message").innerHTML=""; 
        window.location.reload();

       }

    render() {
        
        return (
            <div >

                <header>
                    <h1>Card-Game</h1>
                    <h3 >Guess the word!!</h3>


                </header>
                {
                    Array.from(this.state.chars).map((c,i)=>
                    <CharacterCard value={c} key={i} attempt={this.state.attempt}
                    activationHandler={this.activationHandler}
                    />)
                }
            
                <h1 id="message" >{this.state.completed? "You Win":""}</h1>
            
                <div>
                    <button className="button1" onClick={this.changState}>New Game</button>
                    
                    
                
                
                
                </div>

                
            </div>
        )
    }
}
