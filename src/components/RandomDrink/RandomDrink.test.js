import { RandomDrink } from './RandomDrink'
import { mockDrink, mockUserIngredients } from '../../util/mockData/mockData';
import {shallow} from 'enzyme'
import React from 'react';

describe('Random Drink Card', ()=> {
  
  it('should render correctly', ()=> {
    let wrapper = shallow(<RandomDrink drinkInfo={mockDrink} ingredients={mockUserIngredients} />)
    expect(wrapper).toMatchSnapshot()
  })

})