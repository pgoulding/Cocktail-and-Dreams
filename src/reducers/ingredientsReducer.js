export const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENTS':
      return state = [...state, ...action.ingredients]
    case 'REMOVE_INGREDIENTS':
      return state.filter(ingredient => ingredient.id !== action.id)
    default:
      return state
  }
}