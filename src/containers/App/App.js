import React, { Component } from 'react'
import { getIngredientList, getIngredientDetails } from '../../util/api/apiFetch'
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux'

export class App extends Component {
  constructor(){
    super()
    this.state ={
      
    }
  }
  async componentDidMount() {

    const details  = getIngredientDetails('Applejack')
    // const ingredientDetails = ingredientList.map(async ingredient => {
    //   const details = await getIngredientDetails(ingredient)
    //   return details
    // })
    console.log(await details)
  }

  render() {
    return (
      <main>
        <Sidebar />
        <p>whatup</p>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({

})


const mapDispatchToProps=(dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(App)

