import React, { Component } from 'react'
import Image from './components/Image.js'
import {allPokemon} from './images/'
export class App extends Component {
  state={
    score: '',
    topScore: '',
    clickedImages: [],
  }

  
  render() {
    return (
      <div>
        
        {
          allPokemon.map(pokemon =>(
            <Image img={pokemon}/>
          ))
        }
      </div>
    )
  }
}

export default App

