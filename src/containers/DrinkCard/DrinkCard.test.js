import React from 'react';
import { shallow } from 'enzyme';
import { DrinkCard, mapStateToProps, mapDispatchToProps } from './DrinkCard';
import { mockDrink, mockIngredients, mockUserIngredients, mockCleanedDrink } from '../../util/mockData/mockData'
import { addFavorite, removeFavorite } from '../../actions/'

describe('Drink Card', () => {
let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DrinkCard drinkInfo={mockCleanedDrink} ingredients={mockUserIngredients} favoriteCocktails={[mockDrink]} addCocktail={jest.fn()} removeCocktail={jest.fn()}/>);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map favorite cocktails to props', () => {
    const mockfavoriteCocktails = [mockCleanedDrink]
    const expected = {
      favoriteCocktails:[ mockfavoriteCocktails], ingredients:[]}
    const mappedProps = mapStateToProps({favoriteCocktails:[mockfavoriteCocktails], ingredients:[]})
    expect(mappedProps).toEqual(expected)
  })

  it('should map ingredients to props', () => {
    const mockIngredients = [
      { id: 1, name:'gin' },
      { id: 2, name: 'soda' },
      { id: 3, name: 'lime' },
    ]

    const expected = {
      favoriteCocktails: [], ingredients: mockIngredients
    }

    const mappedProps = mapStateToProps({ favoriteCocktails: [], ingredients: mockIngredients })
    expect(mappedProps).toEqual(expected)
  })

  it('should map addCocktail to dispatch', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = addFavorite(mockCleanedDrink)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addCocktail(mockCleanedDrink)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should map removeCocktail to dispatch', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = removeFavorite(mockCleanedDrink.drinkId)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.removeCocktail(mockCleanedDrink.drinkId)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

});