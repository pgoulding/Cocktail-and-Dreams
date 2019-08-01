import { Header, mapStateToProps } from './Header'
import { mockDrink, mockUserIngredients, mockCleanedDrink } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'
import React from 'react';

describe('Header', ()=> {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Header ingredients={mockUserIngredients} favoriteCocktails={[mockDrink]}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match favorites to props', () => {
    const mockfavoriteCocktails = [mockCleanedDrink]
    const expected = {
      favoriteCocktails: [mockfavoriteCocktails]
    }
    const mappedProps = mapStateToProps({ favoriteCocktails: [mockfavoriteCocktails] })
    expect(mappedProps).toEqual(expected)
  })

  it('should match ingredients to props', () => {
    const mockIngredients = [
      { id: 1, name: 'gin' },
      { id: 2, name: 'soda' },
      { id: 3, name: 'lime' },
    ]

    const expected = {
      favoriteCocktails: [], ingredients: mockIngredients
    }

    const mappedProps = mapStateToProps({ favoriteCocktails: [], ingredients: mockIngredients })
    expect(mappedProps).toEqual(expected)
  })
})