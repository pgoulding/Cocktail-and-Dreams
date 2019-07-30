import {drinksApiKey} from '../apiKey'
import fetchCleaner from '../fetchCleaner';

const listURL = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/list.php?`
const searchURL = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/search.php?`

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
    // const promisedArr = await Promise.resolve(parsed.ingredients)
    return Promise.resolve(...parsed.ingredients)
  } catch (error) {
    throw Error(error.message)
  }
}

export const findDrinkbyName = async (drinkName) => {
  try {
    const response = await fetch(`${searchURL}s=${drinkName}`)
    const parsed = await response.json()
    const cleaned = fetchCleaner(parsed.drinks)
    return Promise.resolve(cleaned)
  } catch (error) {
    throw Error (error.message)
  }
}

export const randomDrink = async ()=> {
  const randomUrl = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/random.php`
  try {
    const response = await fetch(randomUrl)
    const parsed = await response.json()
    const cleaned = fetchCleaner(parsed.drinks)
    console.log(cleaned)
    return cleaned
  } catch (error) {
    throw Error(error.message)
  }
}



