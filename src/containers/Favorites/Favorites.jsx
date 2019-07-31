import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DrinkCard from '../DrinkCard/DrinkCard';
import './Favorites.scss'
export const Favorites =({favoriteCocktails}) => {

  const showFavorites = () => {
    if(favoriteCocktails.length) {
      return favoriteCocktails.map(drink => {
        return <DrinkCard key={drink.drinkId} drinkInfo={drink} />
      })
    } else {
      return <h2>No Favorites added Yet...</h2>
    }
  }

  return (
    <div className="favorites-container">
      {showFavorites()}
    </div>
  )
}

const mapStateToProps = ({favoriteCocktails}) => ({
  favoriteCocktails
})

export default connect(mapStateToProps)(Favorites)

