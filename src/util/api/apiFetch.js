import {drinksApiKey} from '../apiKey'

const listURL = `https://www.thecocktaildb.com/api/json/v1/${drinksApiKey}/list.php?`
const searchURL = `https://www.thecocktaildb.com/api/json/v1/${drinksApiKey}/search.php?i=`
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
    const response = await fetch(`${searchURL}${ingredientName}`)
    console.log(response)
    const parsed = await response.json()
    console.log(await parsed)
    return parsed
  } catch (error) {
    throw Error(error.message)
  }
}



