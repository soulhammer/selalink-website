import { ingredients } from './index.ts';
export const seafoodIngredients = ingredients.filter(item => item.category === 'seafood');
