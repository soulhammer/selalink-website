import { ingredients } from '../ingredients.ts';
export const dairyIngredients = ingredients.filter(item => item.category === 'dairy');
