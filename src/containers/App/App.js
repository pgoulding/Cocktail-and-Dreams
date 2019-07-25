import React, { Component } from 'react'
import { getIngredientList, getIngredientDetails } from '../../util/api/apiFetch'

export class App extends Component {

  async componentDidMount() {
    const ingredientList  = await getIngredientList()
    
    const details  = getIngredientDetails('Applejack')
    // const ingredientDetails = ingredientList.map(async ingredient => {
    //   const details = await getIngredientDetails(ingredient)
    //   return details
    // })
    console.log(await details)
  }

  render() {
    return (
      <div>
        <p>whatup</p>
      </div>
    )
  }
}

export default App

