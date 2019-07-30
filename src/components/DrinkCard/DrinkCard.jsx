import React from 'react'
import './DrinkCard.scss'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from '../../actions/index'

const DrinkCard = ({drinkInfo, ingredients, favoriteCocktails, addCocktail, removeCocktail}) => {
  const drinkCard = {...drinkInfo}

 const updateStore = (e) => {
    e.preventDefault()
    if (favoriteCocktails.find(favCocktails => favCocktails.drinkId === drinkCard.drinkId)) {
      removeCocktail(drinkInfo.drinkId)
      console.log(drinkCard.drinkId)
    } else {
     addCocktail(drinkCard)
    }
  }

  return (
    <div className="drink-card" >
      <h3>{drinkCard.drinkName}</h3>
      <div className="drink-card-info">
        <img className="drink-image" src={drinkCard.drinkImageSource} alt={`${drinkCard.drinkName}`} />
        <div>
          <p>{drinkCard.instructions}</p>
        </div>
      </div>
      <div className='drink-card-instructions'>
        <ul>
        {drinkCard.ingredients.map(item => {
          if (item.ingredient) {
            return <li 
            className={ingredients.find(name => name.strIngredient === item.ingredient) ? 'found-ingredient': 'no-ingredient'}
            >{item.ingredient} : {item.amount}</li>
          }
        })}
        </ul>
        <div>
          <p>Type: {drinkCard.alcoholic}</p>
          <p>Glass: {drinkCard.glass}</p>
        </div>
      </div>
      <div>
        <button onClick={(e) => updateStore(e)}>
          Favorite
          {/* {fav ? 'Remove Favorite': ' Add Favorite'} */}
        </button>
      </div>
    </div>
  ) 
}

const mapStateToProps = ({ingredients, favoriteCocktails}) => ({
  ingredients,
  favoriteCocktails
})

const mapDispatchToProps = (dispatch) => ({
  addCocktail: (cocktail) => dispatch(addFavorite(cocktail)),
  removeCocktail: (id) => dispatch(removeFavorite(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(DrinkCard)
