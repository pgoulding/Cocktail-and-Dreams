import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Favorites extends Component {
  static propTypes = {
    prop: PropTypes
  }

  showFavorites = () => {
    this.props.favoriteCocktails.map(drink => {
      
    })
  }

  render() {
    if(!this.props.favoriteCocktails.length) {
      return (
        <h2>No Favorite Cocktails added yet</h2>
      )
    }
    return (
      <div>
        
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

