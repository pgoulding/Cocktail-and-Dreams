import React, { Component } from 'react'
import { getIngredientList, getIngredientDetails } from '../../util/api/apiFetch'
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux'
import Header from '../../components/Header/Header';
import './App.css'
import {Route} from 'react-router-dom'
import Search from '../../components/Search/Search'
import { Favorites } from '../Favorites/Favorites';
import Ingredients from '../Ingredients/Ingredients';
import RandomDrink from '../../components/RandomDrink/RandomDrink';
export class App extends Component {
  constructor(){
    super()
    this.state ={

    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <main>
        <Header />
        <Route exact path="/" render={()=> <Search />} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/random" component={RandomDrink} />
        {/* <Route path ={`/favorites/${this.props.exactDrink}`} /> */}
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  exactDrink: state.exactDrink
})


const mapDispatchToProps=(dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(App)

