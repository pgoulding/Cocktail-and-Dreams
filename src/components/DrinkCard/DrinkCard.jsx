import React from 'react'
import './DrinkCard.scss'
import { connect } from 'react-redux'

const DrinkCard = ({drinkInfo, ingredients}) => {
  const drinkCard = {...drinkInfo, favorited:true}
  return (
    <div className="drink-card" data-favorite={drinkCard.favorited}>
      <h3>{drinkCard.drinkName}</h3>
      <div className="drink-card-info">
        <img className="drink-image" src={drinkCard.drinkImageSource} alt={`${drinkCard.drinkName}`} />
        <p>glass: {drinkCard.glass}</p>
        <p>{drinkCard.alcoholic}</p>
      </div>
      <div className='drink-card-instructions'>
        {drinkCard.instructions}
        <ul>
        {drinkCard.ingredients.map(item => {
          if (item.ingredient) {
            return <li className=
              {ingredients.find(name => name.strIngredient === item.ingredient) ? 'found-ingredient': 'no-ingredient'}
            >{item.ingredient} : {item.amount}</li>
          }
        })}
        </ul>
      </div>
    </div>
  ) 
}

const mapStateToProps = ({ingredients, favoriteCocktails}) => ({
  ingredients,
  favoriteCocktails
})


export default connect(mapStateToProps)(DrinkCard)
