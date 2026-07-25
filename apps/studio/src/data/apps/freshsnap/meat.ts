import { ingredients } from './index.ts';
export const meatIngredients = ingredients.filter(item => item.category === 'meat');
