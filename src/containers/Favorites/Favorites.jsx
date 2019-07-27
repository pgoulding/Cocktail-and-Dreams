import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Favorites extends Component {
  constructor(props) {
    super()
  }
  showFavorites = () => {
    return this.props.favoriteCocktails.map(drink => {
      return <p>{ drink }</p>
    })
  }

  render() {
    if(!this.props.favoriteCocktails) {
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

