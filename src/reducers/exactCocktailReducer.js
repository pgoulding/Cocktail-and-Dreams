export const exactCocketailReducer =(state='', action) => {
  switch (action.type) {
    case 'FIND_EXACT_COCKTAIL':
      return action.cocktail
    default:
      return state;
  }
}