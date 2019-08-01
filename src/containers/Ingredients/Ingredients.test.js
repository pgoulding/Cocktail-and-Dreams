import { Ingredients } from './Ingredients'
import { mockDrink, mockUserIngredients } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'
import React from 'react';

describe('Ingredients', () => {
  
  it('shuld match the snapshot', () => {
    let wrapper= shallow(<Ingredients ingredients={mockUserIngredients} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should map ingredients to props', () => {
    
  })

})