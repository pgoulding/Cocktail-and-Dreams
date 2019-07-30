import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addFavorite, removeFavorite} from '../../actions/index'

export class DrinksButton extends Component {
  constructor() {
    super()
    this.state={
      favorited: false
    }
  }
  componentDidMount() {
    // console.log(this.props.favCocktails.find(favCocktails => favCocktails.id === this.props.cocktail.id));
    console.log(this.props)
  }
  updateStore = (e) => {
    e.preventDefault()
    if (this.props.favCocktails.find(favCocktails => favCocktails.id === this.props.cocktail.id)) {
      removeFavorite(this.props.cocktail.id)
      
    } else {
      addFavorite(this.props.cocktail)
    }
  }
  render () {
    return (
      <div>
        <button onClick={(e) => this.updateStore(e)}>
          Favorite
          {/* {fav ? 'Remove Favorite': ' Add Favorite'} */}
        </button>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  favCocktails: state.favoriteCocktails,
  ingredients: state.ingredients
})

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (cocktail) => dispatch(addFavorite(cocktail)),
  removeFavorite:(id) => dispatch(removeFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DrinksButton)
