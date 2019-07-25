import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
  return (
    <header>
      <Link to="/">
      <h1>Mixer</h1>
      </Link>
      <nav>
        <Link to="/favorites">Ingredients</Link>
        <Link to="/ingredients">Favorites</Link>
        <Link to="/random">Random</Link>
      </nav>
    </header>
  )
}

export default Header
