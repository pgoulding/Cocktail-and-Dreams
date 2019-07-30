import React from 'react'
import './IngredientCard.scss'
const IngredientCard = ({ingredient}) => {
  return (
    
      <div className="ingredient-card">
        <div className="ingredient-foreground">
          <h3>{ingredient.strIngredient}</h3>
          <img className="ingredient-image" alt={ingredient.strIngredient} src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`} /> 
        </div>
        <div className="ingredient-description">
          <p>{ingredient.strDescription || 'No Description supplied'}</p>
        </div>
      </div>
      
  )
}

export default IngredientCard
