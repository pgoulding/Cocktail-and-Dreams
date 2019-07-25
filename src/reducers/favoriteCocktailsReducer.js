export const favoriteCocktailsReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return state=[...state, ...action.recipe]
    case 'REMOVE_FAVORITE':
      return state.filter(recipe => recipe.id !== action.id)
    default:
      return state
  }
}