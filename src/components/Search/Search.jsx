import React, { Component } from 'react'
import { findDrinkbyName } from '../../util/api/apiFetch'
import './Search.scss'
import DrinkCard from '../DrinkCard/DrinkCard';
export class Search extends Component {
  constructor() {
    super()
    this.state={
      searchInput:'',
      searchOptions:'',
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

  showResults =() => {
    return this.state.searchResults.map(result => {
      return <DrinkCard drinkInfo={result} />
    })
  } 



  render() {
    return (
      <article className="cocktail-search-menus">
        <div className="cocktail-name-search">
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
      {this.showResults()}
        </div>
        <div className="cocktail-filter-ingredients">
          <h3>What Can I Make?</h3>
          <form>
            <label>
              
            </label>
            {/* {this.showOptions()} */}
          </form>
        </div>
      </article>
    )
  }
}

export default Search
