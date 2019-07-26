export const findIngredients = (ingredients) => ({
  type:'FIND_INGREDIENTS',
  ingredients
})

export const setIngredients = (ingredients) => ({
  type:'ADD_INGREDIENTS',
  ingredients
})

export const setRecipes = (recipe) => ({
  type: 'SET_RECIPES',
  recipe
})

export const findExactCocktail=(cocktailName) => ({
  type: 'FIND_EXACT_COCKTAIL',
  cocktailName
})

