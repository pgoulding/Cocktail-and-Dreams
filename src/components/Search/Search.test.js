import Search from './Search'
import { mockDrink, mockUserIngredients, mockCleanedDrink, ingredientsList } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'
import React from 'react';


jest.mock('../../util/api/apiFetch', () => ({
  getIngredientList: jest.fn().mockImplementation(() => {
    return [{ "strIngredient1": "Dark rum" },
      { "strIngredient1": "Sweet Vermouth" },
      { "strIngredient1": "Strawberry schnapps" },
      { "strIngredient1": "Scotch" },
      { "strIngredient1": "Apricot brandy" },
      { "strIngredient1": "Triple sec" },
      { "strIngredient1": "Apple brandy" },
      { "strIngredient1": "Carbonated water" },
      { "strIngredient1": "Chocolate syrup" }];
  }),
  findDrinkbyName: jest.fn().mockImplementation(() => {
    return [mockCleanedDrink]
  })
}));

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

  it('should map over the ingredients supplied, alpahbetize them, and add to state', () => {
    wrapper.instance().componentDidMount()
    const alpahabetizedIngredients = [{ "strIngredient1": "Dark rum" },
    { "strIngredient1": "Sweet Vermouth" },
    { "strIngredient1": "Strawberry schnapps" },
    { "strIngredient1": "Scotch" },
    { "strIngredient1": "Apricot brandy" },
    { "strIngredient1": "Triple sec" },
    { "strIngredient1": "Apple brandy" },
    { "strIngredient1": "Carbonated water" },
    { "strIngredient1": "Chocolate syrup" }].map(item => item.strIngredient1).sort()
    expect(wrapper.state('searchOptions')).toEqual(alpahabetizedIngredients)
  })

})