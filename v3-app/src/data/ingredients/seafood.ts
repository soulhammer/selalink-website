import { ingredients } from '../ingredients.ts';
export const seafoodIngredients = ingredients.filter(item => item.category === 'seafood');
