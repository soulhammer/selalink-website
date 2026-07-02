import { ingredients } from '../ingredients.ts';
export const condimentIngredients = ingredients.filter(item => item.category === 'condiment');
