import React from 'react';
import { shallow } from 'enzyme';
import { DrinkCard } from './DrinkCard';
import { mockDrink, mockIngredients, mockUserIngredients, mockCleanedDrink } from '../../util/mockData/mockData'
describe('Drink Card', () => {

  it('should match snapshot', () => {
    let wrapper = shallow(<DrinkCard drinkInfo={mockCleanedDrink} ingredients={mockUserIngredients} favoriteCocktails={[mockDrink]} addCocktail={jest.fn()} removeCocktail={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });

});