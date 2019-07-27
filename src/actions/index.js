export const findIngredients = (ingredients) => ({
  type:'FIND_INGREDIENTS',
  ingredients
})

export const addIngredients = (ingredients) => ({
  type:'ADD_INGREDIENTS',
  ingredients
})

export const setIngredientDetails = (ingredients) => ({
  type:'SET_INGREDIENT_DETAILS',
  ingredients
})

export const setRecipes = (recipe) => ({
  type: 'SET_RECIPES',
  recipe
})

// export const findExactCocktail=(cocktailName) => ({
//   type: 'FIND_EXACT_COCKTAIL',
//   cocktailName
// })

