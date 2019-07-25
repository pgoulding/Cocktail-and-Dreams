import {combineReducers} from 'redux';
import  {ingredientsReducer} from './ingredientsReducer'
import {favoriteCocktailsReducer} from './favoriteCocktailsReducer'

const rootReducer = combineReducers({
  ingredients:ingredientsReducer,
  favoriteCocktails: favoriteCocktailsReducer
})

export default rootReducer