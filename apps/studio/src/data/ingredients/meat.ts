import { ingredients } from '../ingredients.ts';
export const meatIngredients = ingredients.filter(item => item.category === 'meat');
