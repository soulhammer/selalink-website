import { ingredients } from './index.ts';
export const vegetableIngredients = ingredients.filter(item => item.category === 'vegetable');
