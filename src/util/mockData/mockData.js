export const ingredientsList = [
  {"strIngredient1": "Dark rum"},
  {"strIngredient1": "Sweet Vermouth"},
  {"strIngredient1": "Strawberry schnapps"},
  {"strIngredient1": "Scotch"},
  {"strIngredient1": "Apricot brandy"},
  {"strIngredient1": "Triple sec"},
  {"strIngredient1": "Apple brandy"},
  {"strIngredient1": "Carbonated water"},
  {"strIngredient1": "Chocolate syrup"},
]

export const mockUserIngredients =[
  {
    "idIngredient": "571",
    "strIngredient": "151 proof rum",
    "strDescription": "Bacardi 151 is a brand of highly alcoholic rum made by Bacardi Limited of Hamilton, Bermuda.",
    "strType": "Rum"
  },
{
    "idIngredient": "573",
    "strIngredient": "Absinthe",
    "strDescription": "Absinthe is historically described as a distilled, highly alcoholic (45–74% ABV / 90–148 U.S. proof) beverage.[1][2][3][4] It is an anise-flavoured spirit derived from botanicals, including the flowers and leaves of Artemisia absinthium (\"grand wormwood\"), together with green anise, sweet fennel, and other medicinal and culinary herbs.",
    "strType": "Spirit"
  },
  {
    "idIngredient": "8",
    "strIngredient": "Absolut Vodka",
    "strDescription": "Absolut Vodka is a brand of vodka, produced near Åhus, in southern Sweden.",
    "strType": "Vodka"
  },
{
    "idIngredient": "18",
    "strIngredient": "Amaretto",
    "strDescription": "Amaretto (Italian for \"a little bitter\") is a sweet, almond-flavoured, Italian liqueur associated with Saronno, Italy. Various commercial brands are made from a base of apricot pits, almonds, or both. When served as a beverage.",
    "strType": "Liqueur"
  },
{
    "idIngredient": "221",
    "strIngredient": "Fruit Punch",
    "strDescription": null,
    "strType": null
  },
{
    "idIngredient": "457",
    "strIngredient": "Sour Mix",
    "strDescription": "Sour mix (also known as sweet and sour mix) is a mixer that is yellow-green in color and is used in many cocktails",
    "strType": "Soft Drink"
  }
]

export const mockDrink = {
  "idDrink": "11007",
  "strDrink": "Margarita",
  "strAlcoholic": "Alcoholic",
  "strGlass": "Cocktail glass",
  "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
  "strIngredient1": "Tequila",
  "strIngredient2": "Triple sec",
  "strIngredient3": "Lime juice",
  "strMeasure1": "1 1/2 oz ",
  "strMeasure2": "1/2 oz ",
  "strMeasure3": "1 oz ",
  "strCreativeCommonsConfirmed": "No",
  "dateModified": "2015-08-18 14:42:59"
}

export const mockCleanedDrink = {
  drinkId: "11007",
  drinkName: "Margarita",
  alcoholic: "Alcoholic",
  glass: "Cocktail glass",
  instructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  favorited: false,
  drinkImageSource: "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
  ingredients:[
    {ingredient: "Tequila", amount:"4oz"},
    {ingredient:"Mix", amount:"8oz"},
  ]
}