import React from 'react';
import { shallow } from 'enzyme';
// import { mapStateToProps } from './DrinkCard';
import IngredientCard from './IngredientCard';

describe('Ingredient Card', () => {

  it('should match snapshot', () => {
    const mockIngredient = {
      "idIngredient": "189",
      "strIngredient": "Dry Vermouth",
      "strDescription": "Vermouth (/vərˈmuːθ/ ver-MOOTH; also UK: /ˈvɜːrməθ/;) is an aromatized, fortified wine flavored with various botanicals (roots, barks, flowers, seeds, herbs, and spices).",
      "strType": "Fortified Wine"
    }
    let wrapper = shallow(<IngredientCard ingredient={mockIngredient}/>);
    expect(wrapper).toMatchSnapshot();
  });

});