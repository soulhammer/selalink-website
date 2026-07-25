import { ingredients } from './index.ts';
export const condimentIngredients = ingredients.filter(item => item.category === 'condiment');
