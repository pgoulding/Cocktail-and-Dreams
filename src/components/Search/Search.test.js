import Search from './Search'
import { mockDrink, mockUserIngredients } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'
import React from 'react';

describe('Search', () => {
let e;
let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />)
    e ={
      target:{
        name:'cocktailName',
        value:'margarita'
      }
    }
  })


  it('should match the snapshot', () => {
    let wrapper = shallow(<Search />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle change on input', () => {
    wrapper.instance().handleChange(e)
    expect(wrapper.state('searchInput')).toEqual(['margarita'])
  })

  it('should handleChange', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('.cocktailSearchInput').simulate('change', e);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })

  it('should call handle submit on button click', () => {
    wrapper.instance().handleSubmit = jest.fn()
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.find('.search-submit-button').simulate('click', mockEvent)
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled()
  })

  it('should call handle submit on button click', () => {
    wrapper.instance().findDrinkByIngredients = jest.fn()
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.find('.ingredient-submit-button').simulate('click', mockEvent)
    expect(wrapper.instance().findDrinkByIngredients).toHaveBeenCalled()
  })

})