import React, { Component } from 'react'
import { findDrinkbyName } from '../../util/api/apiFetch'
import './Search.scss'
import DrinkCard from '../DrinkCard/DrinkCard';
export class Search extends Component {
  constructor() {
    super()
    this.state={
      searchInput:'',
      searchResults:[]
    }
  }

  handleChange =(e) => {
    this.setState({searchInput:[e.target.value]})
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const drinkResults = await findDrinkbyName(this.state.searchInput)
    this.setState({searchResults:drinkResults})

  }

  showFavorites =() => {
    return this.state.searchResults.map(result => {
      return <DrinkCard drinkInfo={result} />
    })
  } 

  render() {
    return (
      <div>
        <h3>Search By Name</h3>
        <form>
          <label>
            Name:
          <input
          name="cocktailName"
          value={this.state.searchInput}
          onChange={this.handleChange}
          />
          </label>
          <button onClick={(e) => this.handleSubmit(e)}>
            Find My Drink!
          </button>
        </form>
        <div>
          {this.showFavorites()}
        </div>
      </div>
    )
  }
}

export default Search
