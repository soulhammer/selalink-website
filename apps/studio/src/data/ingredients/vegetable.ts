import { ingredients } from '../ingredients.ts';
export const vegetableIngredients = ingredients.filter(item => item.category === 'vegetable');
