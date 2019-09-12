import React, { Component } from 'react'
import Image from './components/Image.js'
import allPokemon from './allPokemon.json'
var shuffle = require('shuffle-array')


shuffle(allPokemon)

export class App extends Component {
  state={
    score: '',
    topScore: '',
    clickedImages: [],
    allPokemon
  }

  handleClicked = (e) =>{
    
      console.log(e.target)
      
      let newArr = this.state.clickedImages
      newArr.push(e.target.id)

      this.setState({
        clickedImages: newArr
      })


      // shuffle(this.state.allPokemon)

      // this.setState({allPokemon})

  
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

