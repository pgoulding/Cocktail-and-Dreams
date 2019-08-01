import { Sidebar} from './Sidebar'
import { mockDrink, mockUserIngredients, mockCleanedDrink } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'
import React from 'react';
import {mapDispatchToProps} from './Sidebar'
import {addIngredients} from '../../actions/index'
import {getIngredientList} from '../../util/api/apiFetch'

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
  })
}));

describe('Sidebar', () => {

  let wrapper;
  let e;
  beforeEach(() =>{
    wrapper = shallow(<Sidebar addIngredients={jest.fn()}/>)
    e = {
      preventDefault: jest.fn(),
      target: {
        name: 'cocktailName',
        value: 'margarita'
      }
    }
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call getIngredientList on CDM', () => {
    let wrapper = shallow(<Sidebar addIngredients={jest.fn()} />)
    wrapper.instance().getIngredientList = jest.fn()
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().getIngredientList).toHaveBeenCalled()
    // I don't know how to get this to work
  })

  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = addIngredients(mockUserIngredients)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addIngredients(mockUserIngredients)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should handleChange', ()=> {
    wrapper.instance().handleChange = jest.fn();
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.find('.ingredients-list-select').simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })

  it('should call sendIngredientsToStore on button click', () => {
    wrapper.instance().sendIngredientsToStore = jest.fn()
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.find('.send-ingredients-button').simulate('click', mockEvent)
    expect(wrapper.instance().sendIngredientsToStore).toHaveBeenCalled()
  })

  it.skip('should remove an item when clicked on', () =>{
    wrapper.instance().componentDidMount()
    wrapper.find('#Scotch').simulate('click', e)
    expect(wrapper.state('ingredientList'))
    //how can we test for length here?
  })

  it('should add a item when clicked on', () => {
    
  })

})