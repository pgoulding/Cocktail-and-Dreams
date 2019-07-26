import React, { Component } from 'react'
import {findDrinkByName} from '../../util/api/apiFetch'
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

  handleSubmit = (e) => {
    e.preventDefault()
    const drinkResults = findDrinkByName(this.state.searchInput)
    this.setState({searchResults:drinkResults})
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
      </div>
    )
  }
}

export default Search
