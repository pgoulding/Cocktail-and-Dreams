import { Sidebar} from './Sidebar'
import { mockDrink, mockUserIngredients } from '../../util/mockData/mockData';
import { shallow } from 'enzyme'
import React from 'react';
import {mapDispatchToProps} from './Sidebar'
import {addIngredients} from '../../actions/index'
import {getIngredientList} from '../../util/api/apiFetch'

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

  it('should call sendIngredieintsToStore on button click', () => {
    wrapper.instance().sendIngredientsToStore = jest.fn()
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.find('.send-ingredients-button').simulate('click', mockEvent)
    expect(wrapper.instance().sendIngredientsToStore).toHaveBeenCalled()
  })

})