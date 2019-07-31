import { Header } from './Header'
import { mockDrink, mockUserIngredients } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'
import React from 'react';

describe('Header', ()=> {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Header ingredients={mockUserIngredients} favoriteCocktails={[mockDrink]}/>)
    expect(wrapper).toMatchSnapshot()
  })
})