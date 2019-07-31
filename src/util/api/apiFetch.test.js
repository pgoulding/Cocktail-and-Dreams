import * as apiFetch from './apiFetch';
import {drinksApiKey} from '../apiKey';
import * as mockData from '../mockData/mockData';
import { fetchCleaner } from '../fetchCleaner';

describe('apiFetch', () => {
  const mockPromiseError = 'response.json is not a function';

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          drinks: [{ drinks: mockData.ingredientsList}]
        })
      })
    );
  });

  describe('fetch the ingredient List', () => {

    it('should call the fetch with the correct arguements', async () => {
      const mockUrl = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/list.php?i=list`
      await apiFetch.getIngredientList(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

  })

  describe('getIngredientDetails', () => {

  })

  describe('findDrinkByName', () => {

  })

  describe('randomDrink', () => {
    
  })
    
});