export const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENTS':
      return state = [...state, ...action.ingredients]
    case 'REMOVE_INGREDIENT':
      return state.filter(ingredient => ingredient !== action.ingredient)
    default:
      return state
  }
}