export const favoriteCocktailsReducer = (state=[], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.cocktail]
    case 'REMOVE_FAVORITE':
      const newState = state.filter(cocktail => cocktail.drinkId !== action.drinkId)
      return newState
    default:
      return state
  }
}