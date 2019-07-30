import React from 'react';
import { shallow, mount } from 'enzyme';
import { mapStateToProps } from './DrinkCard';
import DrinkCard from './DrinkCard';

describe('Drink Card', () => {

  it('should match snapshot', () => {
    let wrapper = mount(<DrinkCard />);
    expect(wrapper).toMatchSnapshot();
  });

});