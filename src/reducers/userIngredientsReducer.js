export const usersIngredientsReducer = (state= [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return state = [...state, ...action.ingredient]
    case 'REMOVE_INGREDIENT':
      return state.filter(item => item.id !== action.id)
    default:
      break;
  }
}