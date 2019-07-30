import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DrinkCard from '../../components/DrinkCard/DrinkCard';

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedCocktails:[]
    }
  }

  componentDidMount() {
    const { favoriteCocktails } = this.props
    console.log(this.props)
  }

  showFavorites = () => {
    return this.state.savedCocktails.map(drink => {
      return <DrinkCard drinkInfo={drink} />
    })
  }
  
  
  render() {
    if(!this.state.favoriteCocktails) {
      return (
        <h2>No Favorite Cocktails added yet</h2>
        )
      }
      return (
      <div>
        {this.showFavorites()}
      </div>
    )
  }
}

const mapStateToProps = ({favoriteCocktails}) => ({
  favoriteCocktails
})

const mapDispatchToProps =(dispatch) =>  ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

