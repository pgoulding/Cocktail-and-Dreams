import React, { Component } from 'react'
import Header from '../Header/Header';
import './App.css'
import {Route} from 'react-router-dom'
import Search from '../../components/Search/Search'
import { Favorites } from '../Favorites/Favorites';
import Ingredients from '../Ingredients/Ingredients';
import RandomDrink from '../../components/RandomDrink/RandomDrink';

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