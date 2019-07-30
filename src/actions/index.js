export const addIngredients = (ingredients) => ({
  type:'ADD_INGREDIENTS',
  ingredients
})

export const removeIngredient= (ingredient) => ({
  type:'REMOVE_INGREDIENT',
  ingredient
})

export const addFavorite = (cocktail) => ({
  type:'ADD_FAVORITE',
  cocktail
})

export const removeFavorite = (drinkId) => ({
  type:'REMOVE_FAVORITE',
  drinkId
})


