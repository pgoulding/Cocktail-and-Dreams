import { favoriteCocktailsReducer } from '../reducers/favoriteCocktailsReducer'
import { ingredientsReducer } from '../reducers/ingredientsReducer'
import { mockCleanedDrink, mockUserIngredients } from '../util/mockData/mockData'

describe('Reducers', () => {
  
  describe('Favortie Cocktails reducer', () => {
  
    it('should return the initial state', () => {
      const expected =[]
  
      expect(favoriteCocktailsReducer(undefined, {})).toEqual(expected)
    })
  
    it('should handle ADD_FAVORITE', () => {
      const cocktail = mockCleanedDrink
      const addFavAction = {
        type: 'ADD_FAVORITE',
        cocktail
      }
      const result = favoriteCocktailsReducer([], addFavAction)
      expect(result).toEqual([mockCleanedDrink])

    })

    it('should handle remove favorite', () => {
      const drinkId = mockCleanedDrink.drinkId
      const state = [mockCleanedDrink]
      const removeFavAction = {
        type: 'REMOVE_FAVORITE',
        drinkId
      }
      const result = favoriteCocktailsReducer(state, removeFavAction)
      expect(result).toEqual([])
    })
  })

  describe('Ingredients Reducer', () => {
    it('should return the initial state', () => {
      const expected = []
      expect(ingredientsReducer(undefined, {})).toEqual(expected)
    })

    it('should handle Add Ingredients', () => {
      const ingredients = mockUserIngredients
      const addIngredientsAction = {
        type: 'ADD_INGREDIENTS',
        ingredients
      }
      const result = ingredientsReducer([], addIngredientsAction)
      expect(result).toEqual(mockUserIngredients)
    })

    it('should handle remove ingredients', () => {
      const ingredient = mockUserIngredients[0]
      const state = [mockUserIngredients[0]]
      const removeFavAction = {
        type: 'REMOVE_INGREDIENT',
        ingredient
      }
      const result = ingredientsReducer(state, removeFavAction)
      expect(result).toEqual([])
    })
  })
})