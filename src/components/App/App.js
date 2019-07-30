import React, { Component } from 'react'
import Header from '../../containers/Header/Header';
import './App.css'
import { Route } from 'react-router-dom'
import Search from '../Search/Search'
import Favorites from '../../containers/Favorites/Favorites';
import Ingredients from '../../containers/Ingredients/Ingredients';
import RandomDrink from '../RandomDrink/RandomDrink';
export class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Route exact path="/" render={()=> <Search />} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/random" component={RandomDrink} />
      </main>
    )
  }
}


export default App

