import { combineReducers } from 'redux';
import  { ingredientsReducer } from './ingredientsReducer'
import { favoriteCocktailsReducer } from './favoriteCocktailsReducer'
import { findExactCocktail } from '../actions';

const rootReducer = combineReducers({
  ingredients:ingredientsReducer,
  favoriteCocktails: favoriteCocktailsReducer,
  exactDrink: findExactCocktail
})

export default rootReducer