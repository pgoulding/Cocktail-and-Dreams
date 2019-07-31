import * as apiFetch from './apiFetch';
import {drinksApiKey} from '../apiKey';
import * as mockData from '../mockData/mockData';
import { fetchCleaner } from '../fetchCleaner';

describe('apiFetch', () => {
  const mockPromiseError = 'response.json is not a function';

  describe('getIngredientList', () => {

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
    
    it('should call the fetch with the correct arguements', async () => {
      const mockUrl = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/list.php?i=list`
      await apiFetch.getIngredientList(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

  })

  describe('getIngredientDetails', () => {
    
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            drinks: [{ drinks: mockData.mockCleanedDrink }]
          })
        })
      );
    });
  })

  describe('findDrinkByName', () => {
    it('should call the fetch with the correct arguments', async () => {
      const mockUrl = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/search.php?s=gin`
      await apiFetch.findDrinkbyName('gin');
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    it('should find a drink by its name', () => {

    })

  })

  describe('randomDrink', () => {
    it('should call the fetch with the correct arguments', async () => {
      const mockUrl = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/random.php`
      await apiFetch.randomDrink();
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
  })

  describe('DrinksByIngredient', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            drinks: [{ drinks: mockData.mockCleanedDrink }]
          })
        })
      );
    });

    it('should call the fetch with the correct arguments', async () => {
      const mockUrl = `https://www.thecocktaildb.com/api/json/v2/${drinksApiKey}/filter.php?i=gin`
      await apiFetch.drinksByIngredient('gin');
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
  })
    
});