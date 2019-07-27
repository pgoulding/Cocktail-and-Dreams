const fetchCleaner = (drinkData) => {
  return drinkData.map(drink => {
    return {
    drinkId:drink.idDrink, 
    drinkName: drink.strDrink,
    alcoholic: drink.strAlcoholic,
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    favorited:false,
    drinkImageSource: drink.strDrinkThumb || null,
    ingredients: [
      { ingredient: drink.strIngredient1, amount: drink.strMeasure1 },
      { ingredient: drink.strIngredient2, amount: drink.strMeasure2 },
      { ingredient: drink.strIngredient3, amount: drink.strMeasure3 },
      { ingredient: drink.strIngredient4, amount: drink.strMeasure4 },
      { ingredient: drink.strIngredient5, amount: drink.strMeasure5 },
      { ingredient: drink.strIngredient6, amount: drink.strMeasure6 },
    ]
   }
  })
}

export default fetchCleaner