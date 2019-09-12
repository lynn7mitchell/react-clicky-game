import React, { Component } from 'react'
import './App.css'
import Image from './components/Image.js'
import allPokemon from './allPokemon.json'
var shuffle = require('shuffle-array')


shuffle(allPokemon)

export class App extends Component {
  state={
    score: 0,
    topScore: 0,
    clickedImages: [],
    allPokemon
  }

  handleClicked = (e) =>{
    
      console.log(e.target)
      
      let newArr = this.state.clickedImages
      
      if (newArr.includes(e.target.id)){
        alert("You Lost!")
        this.setState({
          clickedImages: []
        })
        if(this.state.topScore < this.state.score){
          this.setState({
            topScore: this.state.score
          })
        }

        this.setState({
          score: 0
        })
      }else{

      this.setState({
        score:  this.state.score + 1,
      })

      newArr.push(e.target.id)

      this.setState({
        clickedImages: newArr
      })

         




    }

    shuffle(this.state.allPokemon)
    this.setState({allPokemon})

  
    }

  
  render() {
    
    return (
      
      <div>
        
        {
         
          this.state.allPokemon.map(pokemon =>(
            <Image img={pokemon.link} key={pokemon.id} id={pokemon.id} handleClicked={this.handleClicked} alt={pokemon.name} />
          ))
        }
      </div>
    )
  }
}

export default App

