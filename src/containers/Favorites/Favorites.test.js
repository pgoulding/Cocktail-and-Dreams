import { Favorites, mapStateToProps } from './Favorites'
import { mockCleanedDrink } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'

import React from 'react';

describe('Favorites', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Favorites favoriteCocktails={[mockCleanedDrink]} />)
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should show the favorites', () => {
    let wrapper = shallow(<Favorites favoriteCocktails={[mockCleanedDrink]} />)
    wrapper.instance().showFavorites = jest.fn()
    wrapper.instance().showFavorites()
    expect(wrapper.instance().showFavorites).toHaveBeenCalled()
  })

  it('should map the favoriteCocktails to state', () => {
    const mockfavoriteCocktails = [mockCleanedDrink]
    const expected = {
      favoriteCocktails: [mockfavoriteCocktails]
    }
    const mappedProps = mapStateToProps({ favoriteCocktails: [mockfavoriteCocktails] })
    expect(mappedProps).toEqual(expected)
  })

})