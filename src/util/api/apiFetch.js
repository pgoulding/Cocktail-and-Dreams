import {drinksApiKey} from '../apiKey'

const listURL = `https://www.thecocktaildb.com/api/json/v1/${drinksApiKey}/list.php?`
const searchURL = `https://www.thecocktaildb.com/api/json/v1/${drinksApiKey}/search.php?`

export const getIngredientList = async () => {
  try {
    const response = await fetch(`${listURL}i=list`)
    const parsed = await response.json()
    return parsed.drinks
  } catch (error) {
    throw Error(error.message)
  }
}

export const getIngredientDetails = async (ingredientName) => {
  try {
    const response = await fetch(`${searchURL}i=${ingredientName}`)
    const parsed = await response.json()
    return parsed
  } catch (error) {
    throw Error(error.message)
  }
}

export const findDrinkbyName = async (drinkName) => {
  try {
    const response = await fetch(`${searchURL}s=${drinkName}`)
    if(response.ok) {
      const parsed = await response.json()
      return parsed
    } else {
      throw Error('Failed to find drink.')
    }
  } catch (error) {
    throw Error (error.message)
}
}



