import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { connect } from 'react-redux'

const Header = ({ingredients}) => {
  return (
    <header>
      <Link to="/">
      <h1>Mixer</h1>
      </Link>
      <nav>
        <Link to="/ingredients">
          Ingredients 
          <span>{ingredients.length}</span>
        </Link>
        <Link to="/favorites">
          Favorites
        </Link>
        <Link to="/random">
          Random
        </Link>
      </nav>
    </header>
  )
}

const mapStateToProps = ({ingredients}) => ({
  ingredients
})

export default connect(mapStateToProps)(Header)
