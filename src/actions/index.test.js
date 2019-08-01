import * as actions from './index'

describe('actions', () => {

  it('should create an action to add ingredients', () => {
    const ingredients = [
      { strIngredient: 'Applesauce', strDescription:'It\'s like apples but mushy and cold' },
      { strIngredient: 'Oranges', strDescription: 'It\'s like apples but rounder and more orange'}
    ]
    const expectedAction = {
      type: "ADD_INGREDIENTS",
      ingredients
    }
    expect(actions.addIngredients(ingredients)).toEqual(expectedAction)
  })

  it('should create an action to remove the ingredients', () => {
    const ingredient = { strIngredient: 'Applesauce', strDescription: 'It\'s like apples but mushy and cold' }
    const expectedAction = {
      type: "REMOVE_INGREDIENT",
      ingredient
    }
    expect(actions.removeIngredient(ingredient)).toEqual(expectedAction)
  })

  it('should create an action to add favorites', () => {
    const cocktail = { 
      drinkName: 'Whiskey with Ice', 
      strDescription: 'It\'s like whiskey, but colder',
      ingredients:[
        {ingredient:'Whiskey', amount:'4oz'},
        { ingredient: 'Ice', amount: '2 cubes' }
      ]}
    const expectedAction = {
      type: "ADD_FAVORITE",
      cocktail
    }
    expect(actions.addFavorite(cocktail)).toEqual(expectedAction)
  })

  it('should create an action to remove favorites', () => {
    const drinkId = '4'
    const expectedAction = {
      type: "REMOVE_FAVORITE",
      drinkId
    }
    expect(actions.removeFavorite(drinkId)).toEqual(expectedAction)
  })
})