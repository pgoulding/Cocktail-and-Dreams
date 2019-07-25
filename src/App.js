import React, { Component } from 'react'

export class App extends Component {


  componentDidMount() {
    this.fetchDrinks()
  }

  fetchDrinks = async  () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
      const response = await fetch(url)
      const parsed = await response.json()
      console.log(await parsed.drinks)
    } catch (error) {
      throw Error(error.message)
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App

