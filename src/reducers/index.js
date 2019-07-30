import { combineReducers } from 'redux';
import  { ingredientsReducer } from './ingredientsReducer'
import { favoriteCocktailsReducer } from './favoriteCocktailsReducer'
// import { ingredientDetailsReducer } from './ingredientDetailsReducer';

const rootReducer = combineReducers({
  ingredients:ingredientsReducer,
  favoriteCocktails: favoriteCocktailsReducer,
  // ingredientsDetails: ingredientDetailsReducer
})

export default rootReducer