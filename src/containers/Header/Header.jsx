import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { connect } from 'react-redux'

const Header = ({ingredients, favoriteCocktails}) => {
  return (
    <header>
      <Link to="/">
        <h1>Cocktails<span> & dreams</span></h1>
      </Link>
      <nav>
        <Link to="/ingredients">
          Ingredients 
          <span>{' '}{ingredients.length}</span>
        </Link>
        <Link to="/favorites">
          Favorites 
          <span>{' '}{favoriteCocktails.length}</span>
        </Link>
        <Link to="/random">
          Random
        </Link>
      </nav>
    </header>
  )
}

const mapStateToProps = ({ingredients, favoriteCocktails}) => ({
  ingredients,
  favoriteCocktails
})

export default connect(mapStateToProps)(Header)
