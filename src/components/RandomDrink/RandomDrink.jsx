import React, { Component } from 'react'
import { randomDrink } from '../../util/api/apiFetch';
import DrinkCard from '../DrinkCard/DrinkCard';
import './RandomDrink.scss'
export class RandomDrink extends Component {
constructor() {
  super()
  this.state ={
    drink:[]
  }
}
  async componentDidMount() {
    const rando = await randomDrink()
    this.setState({drink: rando})
    console.log(this.state)
  }

  render() {
    return (
      <div className="random-drink-container">
        {this.state.drink.length && <DrinkCard drinkInfo={this.state.drink[0]} />}
      </div>
    )
  }
}

export default RandomDrink
