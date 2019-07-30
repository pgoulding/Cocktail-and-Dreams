import React, { Component } from 'react'
import { findDrinkbyName, getIngredientList, drinksByIngredient } from '../../util/api/apiFetch'
import './Search.scss'
import DrinkCard from '../DrinkCard/DrinkCard';
export class Search extends Component {
  constructor() {
    super()
    this.state={
      searchInput:'',
      searchResults:[],
      searchOptions:[],
      selectedOptions:'',
      filteredDrinks:[]
    }
  }

  async componentDidMount() {
    const ingredientList = await getIngredientList()
    const alphabetizedList = ingredientList.map(item => item.strIngredient1).sort()
    this.setState({ searchOptions: alphabetizedList })
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

  findDrinkByIngredients = async (e) => {
    e.preventDefault()
    const filteredDrinks = await drinksByIngredient(this.state.selectedOptions.toString())
    this.setState({filteredDrinks})
    this.setState({selectedOptions:''})
  }

  handleAddIngredient = (e) => {
    e.preventDefault()
    this.setState({selectedOptions: [...this.state.selectedOptions, e.target.value]})
  }

  filteredDrinksOutput =() => {
    if(Array.isArray(this.state.filteredDrinks)) {
      return this.state.filteredDrinks.map(drink => {
        return <p>{drink.strDrink}</p>
      })
    } else {
      return <p>No Drinks Found</p>
    }
  }

  buttonOptions = () =>{
    return this.state.searchOptions.map(opt => {
      return <button value={opt.split(' ').join('_')} onClick={(e) => this.handleAddIngredient(e)}>{opt}</button>
    })
  }



  render() {
    return (
      <article className="cocktail-search-menus">
        <div className="cocktail-name-search">
          <div className="form-container">
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
            <button className="" onClick={(e) => this.handleSubmit(e)}>
              Find My Drink!
            </button>
          </form>
          </div>
      { this.showResults() }
        </div>
        <div className="cocktail-filter-ingredients">
          <div className="form-container">
            <h3>What Can I Make?</h3>
            <form>
              <label>
                Cocktail Ingredients
                  <input 
                  name="cocktail-ingredients"
                  value={this.state.selectedOptions}
                  />
              </label>
              <button onClick={(e) => this.findDrinkByIngredients(e)}>
                Find My Drink
              </button>
              <div className="ingredient__select-output">
                { this.buttonOptions() }
              </div>
            </form>
          </div>
            {this.filteredDrinksOutput()}
        </div>
      </article>
    )
  }
}

export default Search
